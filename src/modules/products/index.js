const router = require("express").Router();
const upload = require("../../middlewares/multer");
const { AddProduct } = require("./controller");

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

module.exports = router;