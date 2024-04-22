const { CreateOrder , GetOrders } = require("./controllers");

const router = require("express").Router();

router.route("/").get(GetOrders)
router.route("/:id").get(GetOrders)
router.route("/create").post(CreateOrder);

module.exports = router;
