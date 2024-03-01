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
const { hostname } = require("os");

exports.sendEmail = async (
  template_name = "",
  params = {},
  subject = "",
  from = "",
  attachments = []
) => {
  try {
    let UNSUBSCRIBE_URL = `${process.evn.FRONTEND_URL}/norifications/settings`;
    const html = await ejs.renderFile(
      path.join(__dirname, "..", "templates", template_name),
      {
        ...params,
        LANDING_PAGE_URL: process.env.LANDING_PAGE_URL,
        APP_URL: process.env.APP_URL,
        UNSUBSCRIBE_URL,
      }
    );

    const transporter = nodemailer.createTransport({
      hostname: process.env.EMAIL_SMTP_HOST,
      port: process.env.EMAIL_SMTP_PORT,
      auth: {
        user: process.env.SHOP_HERE_EMAIL,
        pass: process.env.SMTP_PASSWORD,
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
