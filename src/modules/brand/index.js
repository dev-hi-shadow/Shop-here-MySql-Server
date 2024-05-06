const upload = require("../../middlewares/multer");
const {
  CreateBrand,
  DeleteBrand,
  GetBrands,
  UpdateBrand,
} = require("./controller");

const router = require("express").Router();

router.route("/").get(GetBrands);
router.route("/create").post(upload("brands").single("image"), CreateBrand);
router.route("/update/:id").put(upload("brands").single("image"), UpdateBrand);
router.route("/delete/:id").delete(DeleteBrand);

module.exports = router;
