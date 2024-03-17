/**
 * @param {string} to
 * @param {string}body
 * @param {Object} user
 * @returns  returns a status based on twilio response object
 */

const { Users, Roles } = require("../models");
const { sendSMS } = require("../services/twilio");
const RoleAttributes = require("../modules/roles/attributes");

exports.sendToAdmins = async (to, message, ...rest) => {
  try {
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

    for (let admin of admins) {
      admin = admin.toJSON();
      await sendSMS(admin, message);
    }
  } catch (error) {
    console.log("SEND TO ADMINS SMS ERROR : ", error);
    throw new Error(error);
  }
};

exports.sendSMSBasedOnType = async (type = "", data = {}) => {
  switch (type) {
    case "NEW_SELLER_REGISTERED":
      await this.sendToAdmins(
        null,
        `We have a new seller, ${data.fullname} , registered on our platform. Please initiate the verification process as soon as possible to ensure compliance and maintain our quality standards.`,
        data
      );
      break;
    default:
      console.log(`${type} TYPE NOT FOUND`);
      break;
  }
};
