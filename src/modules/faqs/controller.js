const { Faqs } = require("../../models");
const faqAttributes = require("./attributes");

const CreateFaq = async (req, res, next) => {
  try {
    const faq = await Faqs.create(req.body);
    res.status(201).json({
      status: 201,
      message: "Faq Created successfully",
      data: faq,
    });
  } catch (error) {
    next(error);
  }
};

const GetFaqs = async (req, res, next) => {
  try {
    let where = {
      product_id: null,
    };
    if (req.params.pid) where.product_id = req.params.pid;
    const faqs = await Faqs.findAndCountAll({
      where,
      attributes: faqAttributes.default,
    });
    res.status(200).json({
      status: 200,
      success: true,
      message: "Faq fetched successfully",
      data: faqs,
    });
  } catch (error) {
    next(error);
  }
};
const UpdateFaq = async (req, res, next) => {
  try {
    const faq = await Faqs.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json({
      status: 200,
      success: true,
      message: "Faq updated successfully",
      data: faq,
    });
  } catch (error) {
    next(error);
  }
};
const DeleteFaq = async (req, res, next) => {
  try {
    const faq = await Faqs.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({
      status: 200,
      success: true,
      message: "Faq deleted successfully",
      data: faq,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  CreateFaq,
  GetFaqs,
  UpdateFaq,
  DeleteFaq,
};
