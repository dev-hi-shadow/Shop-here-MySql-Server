const { GetOffers, AddOffer } = require("./controller");

const router = require("express").Router();

router.route("/create").post(AddOffer);
router.route("/update/:id").post(AddOffer);

module.exports = router;
