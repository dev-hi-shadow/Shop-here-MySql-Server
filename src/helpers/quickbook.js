const moment = require("moment");
const { QbConfig } = require("../models");
const axios = require("axios");
exports.generateQuickbookAccessToken = async (data = {}) => {
  try {
    console.log("HELLO")
    let requestData = new URLSearchParams({
      grant_type: "client_credentials",
      scope:
        "com.intuit.quickbooks.accounting openid profile email phone address",
    });

    if (data?.qb_refresh_token) {
      requestData.set("grant_type", "refresh_token");
      requestData.set("refresh_token", data.qb_refresh_token);
    }
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
      Authorization: `Basic ${Buffer.from(
        `${process.env.QUICKBOOK_APP_CLIENT_ID}:${process.env.QUICKBOOK_APP_CLIENT_SECRET}`
      ).toString("base64")}`,
    };
    let response = await axios.post(
      process.env.QUICKBOOK_ACCESS_TOKEN_ENDPOINT,
      requestData,
      { headers }
    );
    console.log("response accesstoken"  , response);
    if (response?.status === 200) {
      let obj = {
        qb_access_token: response?.data?.access_token,
        qb_refresh_token: response?.data?.refresh_token,
        qb_access_token_expires_in: new Date(
          moment().add(response?.data?.expires_in, "seconds")
        ).toString(),
        qb_refresh_token_expires_in: new Date(
          moment().add(response?.data?.x_refresh_token_expires_in, "seconds")
        ).toString(),
      };
      if (data?.qb_access_token) {
        await QbConfig.update(obj, {
          where: {
            id: data.id,
          },
        });
      } else {
        await QbConfig.create(obj);
      }
      return response?.data?.access_token;
    }
    return null;
  } catch (error) {
    console.log("generateQBAccessToken", error);
    throw new Error(error);
  }
};

/**
 * This function returns quick book access token
 * @returns quickbook access token
 */
exports.getQuickbookAccessToken = async () => {
  try {
    let data = await QbConfig.findByPk(1);
    if (data) {
      data = data.toJSON();
      if (
        data?.qb_access_token &&
        moment(data?.qb_access_token_expires_in).isAfter(moment())
      ) {
        return data?.qb_access_token;
      }
    }
    return await this.generateQuickbookAccessToken(data || {});
  } catch (error) {
    console.log("getQBAccessToken", error);
    throw new Error(error);
  }
};
