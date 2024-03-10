const { Taxes } = require("../../models");
const { defaultAttributes } = require("./attributes");

exports.CreateTax = async (req, res, next) => {
  try {
    const tax = await Taxes.create({
      ...req.body,
      updated_by: req.user_id,
      created_by: req.user_id,
    });
    res.status(201).json({
      status: 201,
      success: true,
      data: tax,
      message: "Tax created successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.GetTaxes = async (req, res, next) => {
  try {
    const tax = await Taxes.findAll({
      attributes: defaultAttributes,
    });
    res.status(200).json({
      status: 200,
      success: true,
      data: tax,
      message: "Tax fetched successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.UpdateTax = async (req, res, next) => {
  try {
    const tax = await Taxes.update({
      ...req.body,
      updated_by: req.user_id,
    });
    res.status(200).json({
      status: 200,
      success: true,
      data: tax,
      message: "Tax updated successfully",
    });
  } catch (error) {
    next(error);
  }
};
