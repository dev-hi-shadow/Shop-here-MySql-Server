const { default: axios } = require("axios");
const { getQuickbookAccessToken } = require("../../helpers/quickbook");

exports.TestQuickBook = async (req, res, next) => {
  try {
    const access_token = await getQuickbookAccessToken();
    console.log("🚀  access_token:", access_token)
    const query = `SELECT * FROM Account`;
    const url = `https://sandbox-quickbooks.api.intuit.com/v3/company/${
      process.env.QUICKBOOK_COMPANY_ID
    }/query=${encodeURIComponent(query)}?minorversion=69`;
    const headers = {
      Authorization: `Bearer ${access_token}`,
      Accept: "application/json",
      "Content-Type": "application/text",
    };
     const response = await axios.get(url, { headers });
    console.log("🚀  response:", response);

    res.status(200).json({
      status: 200,
      success: true,
      response,
    });
  } catch (error) {
    next(error);
  }
};
