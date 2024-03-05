const { object } = require("joi");
const Roles = require("../modules/roles/model");
const Users = require("../modules/users/model");
const SMSHISTORY = require("../modules/history-sms/model");

const db = {
  Roles,
  Users,
  SMSHISTORY,
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
