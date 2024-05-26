const { ROLES } = require("../../constants");
const { restrictTo } = require("../../middlewares");
const { GetCart, AddToCart, updateCart } = require("./controller");

const router = require("express").Router();

router.route("/create").post(AddToCart);
router.route("/update/:id").put(updateCart);
router.route("/:userId").get(restrictTo([ROLES[0], ROLES[1]]), GetCart);
router.route("/").get(GetCart); 

module.exports = router;
