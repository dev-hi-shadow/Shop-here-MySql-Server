const {
  GetAddresses,
  AddAddress,
  UpdateAddress,
  DeleteAddress,
} = require("./controller");

const router = require("express").Router();

router.route("/").get(GetAddresses);
router.route("/create").post(AddAddress);
router.route("/update/:id").put(UpdateAddress);
router.route("/delete/:id").delete(DeleteAddress);

module.exports = router;
