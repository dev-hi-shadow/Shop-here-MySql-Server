const { GetFaqs, DeleteFaq, CreateFaq, UpdateFaq } = require("./controller");

const router = require("express").Router();

router.route("/update/:id").put(UpdateFaq);
router.route("/create").post(CreateFaq);
router.route("/delete/:pid").delete(DeleteFaq);

module.exports = router;
