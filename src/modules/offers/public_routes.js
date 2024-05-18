const { GetOffers, AddOffer } = require("./controller");

const router = require("express").Router();

router.route("/:id").get(GetOffers);
router.route("/").get(GetOffers);

module.exports = router;
