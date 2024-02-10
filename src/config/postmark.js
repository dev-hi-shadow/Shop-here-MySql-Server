const postmark = require("postmark");

const postmarkClient = new postmark.ServerClient(
  process.env.POSTMARK_SERVER_TOKEN
);

module.exports = {
  postmarkClient,
};
