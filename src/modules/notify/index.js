const { GetAlerts, CreateUserAlerts, UpdateAlerts } = require("./controller");

const router = require("express").Router();

router.route("/").get(GetAlerts);
router.route("/create").get(CreateUserAlerts);
router.route("/update").get(UpdateAlerts);

module.exports = router;
