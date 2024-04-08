const { default: axios } = require("axios");
const { getQuickbookAccessToken } = require("../../helpers/quickbook");

exports.TestQuickBook = async (req, res, next) => {
  try {
    const access_token = await getQuickbookAccessToken();

    const url = `https://sandbox-quickbooks.api.intuit.com/v3/company/${process.env.QUICKBOOK_COMPANY_ID}/query?minorversion=62`;
    const query = `SELECT * FROM Account WHERE AccountType = 'Expense' OR AccountType = 'Cost of Goods Sold'`;
    const headers = {
      Authorization: `Bearer ${access_token}`,
      Accept: "application/json",
      "Content-Type": "application/text",
    };

    const response = await axios.post(url, query, { headers });
    const accounts = response.data.QueryResponse.Account;
      console.log(accounts);
      const accountDetails = accounts.map((account) => ({
      id: account.Id,
      name: account.Name,
      subAccount: account.SubAccount,
      parentRef: account.ParentRef ? account.ParentRef.value : null, // Indicates if it's a subaccount
    }));

    res.status(200).json({
      status: 200,
      access_token,
      accountDetails,
    });
  } catch (error) {
    next(error);
  }
};
