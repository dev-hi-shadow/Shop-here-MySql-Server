/**
 * @param   {String} template_name
 * @param {String} subject
 *  @param {Object} params
 * @param {String} from
 * @param {Array} attachments
 */

const ejs = require("ejs");
const path = require("path");
const nodemailer = require("nodemailer");

exports.sendEmail = async (
  template_name = "",
  params = {},
  subject = "",
  from = "",
  attachments = [],
  ...rest
) => {
  try {
    let UNSUBSCRIBE_URL = `${process.env.FRONT_END_APP_URL}/norifications/settings`;
    const YEAR = new Date().getFullYear();
    const html = await ejs.renderFile(
      path.join(__dirname, "..", "templates", template_name),
      {
        ...params,
        LANDING_PAGE_URL: process.env.LANDING_PAGE_URL,
        FRONT_END_APP_URL: process.env.FRONT_END_APP_URL,
        UNSUBSCRIBE_URL,
        YEAR,
      }
    );

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "ckdrametizzz@gmail.com", // your email
        pass: "uitu yhcv oywg qwkd", // your email password
      },
    });

    const mailOption = {
      from: from || process.env.SHOP_HERE_EMAIL,
      to: params.user_data?.email,
      subject: subject,
      html,
      attachments: attachments,
    };
    await transporter.sendMail(mailOption);
  } catch (error) {
    console.log("sendEmail Error:", error);
    throw new Error(error);
  }
};
