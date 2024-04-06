const router = require("express").Router();
const { AddProduct } = require("./controller");

router.route("/create").post(AddProduct);

module.exports = router;
