const {
  GetAddresses,
  AddAddress,
  UpdateAddress,
  DeleteAddress,
} = require("./controller");

const router = require("express").Router();

router.route("/").get(GetAddresses);
router.route("/create").post(AddAddress);
router.route("/update/:id").get(UpdateAddress);
router.route("/delete/:id").get(DeleteAddress);

module.exports = router;
