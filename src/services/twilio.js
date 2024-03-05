/**
 * @param {String} to
 * @param {String} body
 *
 */

const twilio = require("twilio");
const { formatNumberForTwilio } = require("../helpers");
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

exports.sendSMS = async (to, body) => {
  try {
    const message = `Hi ${to.fullname}, ${body}`;
    const response = await twilioClient.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NO,
      to: formatNumberForTwilio(to.phone),
    });
    return response;
  } catch (error) {
    return error;
  }
};
