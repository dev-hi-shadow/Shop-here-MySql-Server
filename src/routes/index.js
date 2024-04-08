const { verifyAuthToken } = require("../middlewares");

const router = require("express").Router();

router.use("/auth", require("../modules/users/auth_routes"));
router.use("/faqs", require("../modules/faqs/public_routes"));
router.use("/products", require("../modules/products/public_routes"));
router.use("/quickbook", require("../modules/quickbook-configuration"));

router.use(verifyAuthToken);
router.use("/faqs", require("../modules/faqs"));
router.use("/roles", require("../modules/roles/"));
router.use("/categories", require("../modules/categories"));
router.use("/sub-categories", require("../modules/sub-categories/"));
router.use("/users", require("../modules/users/"));
router.use("/alerts", require("../modules/notify"));
router.use("/brands", require("../modules/brand"));
router.use("/addresses", require("../modules/addresses"));
router.use("/attributes", require("../modules/attributes"));
router.use("/taxes", require("../modules/taxes"));
router.use("/units", require("../modules/units"));
router.use("/products", require("../modules/products"));
router.use("/sub-categories-taxes", require("../modules/sub-category-taxes"));
module.exports = router;
