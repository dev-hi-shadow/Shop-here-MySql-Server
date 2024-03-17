/**
 * @param {string} template_name
 * @param {string}subject
 * @param {object} params
 */

const { Users, Roles } = require("../models");
const RoleAttributes = require("../modules/roles/attributes");
const { sendEmail } = require("../services/nodemailer");

exports.sendToAdmins = async (
  template_name = "",
  params = {},
  subject = "",
  from = "",
  attachments = [],
  ...rest
) => {
  const admins = await Users.findAndCountAll({
    include: {
      model: Roles,
      as: "role",
      attributes: RoleAttributes.default,
      where: {
        name: "ADMIN",
      },
      required: true,
    },
  });
  try {
    for (let admin of admins) {
      admin = admin.toJSON();
      await sendEmail(
        template_name,
        { ...params, user_data: admin },
        subject,
        from,
        attachments,
        ...rest
      );
    }
  } catch (error) {
    console.log("SEND TO ADMIN ERROR", error);
    throw new Error(error);
  }
};

exports.sendEmailBasedOnType = async (type = "", data = {}) => {
  switch (type) {
    case "NEW_SELLER_REGISTERED":
      await this.sendToAdmins(
        "new_seller_registered_admin_alert.ejs",
        {
          seller: data,
        },
        "New Seller Registered in Shop-Here.com",
        null,
        null
      );
      break;
    default:
      console.log(`${type} TYPE NOT FOUND`);
      break;
  }
};
