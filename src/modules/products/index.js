const router = require("express").Router();
const upload = require("../../middlewares/multer");
const { AddProduct, UpdateProduct, GetProducts } = require("./controller");

router
  .route("/create")
  .post(
    upload("products", [
      "main_image",
      "main_video",
      { name: "file", limit: 15 },
    ]),
    AddProduct
  );

router
  .route("/update/:id")
  .put(
    upload("products", [
      "main_image",
      "main_video",
      { name: "file", limit: 15 },
    ]),
    UpdateProduct
  );
router.route("/:id").get(GetProducts);

module.exports = router;
