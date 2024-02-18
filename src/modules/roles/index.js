const { GetAllRoles, CreateRole } = require("./controller");

const router = require("express").Router();

router.route("/").get(GetAllRoles);
router.route("/create").post(CreateRole);

module.exports = router;
