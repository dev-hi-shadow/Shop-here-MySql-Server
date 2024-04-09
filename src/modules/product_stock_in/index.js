const { AddStock, GetStock } = require("./controller");

const router = require("express").Router();

router.route("/create").post(AddStock);
router.route("/").get(GetStock);
router.route("/:variation_id").get(GetStock);

module.exports = router;
