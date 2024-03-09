const {
  CreateBrand,
  DeleteBrand,
  GetBrands,
  UpdateBrand,
} = require("./controller");

const router = require("express").Router();

router.route("/").get(GetBrands);
router.route("/create").post(CreateBrand);
router.route("/update/:id").get(UpdateBrand);
router.route("/delete/:id").get(DeleteBrand);

module.exports = router;
