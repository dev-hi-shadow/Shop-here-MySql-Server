const { Units } = require("../../models");
const unitsAttributes = require("./attributes");

exports.CreateUnit = async (req, res, next) => {
  try {
    const unit = await Units.create({
      ...req.body,
      updated_by: req.user_id,
      created_by: req.user_id,
    });
    res.status(201).json({
      status: 201,
      success: true,
      message: "Unit created successfully",
      data: unit,
    });
  } catch (error) {
    next(error);
  }
};

exports.GetUnits = async (req, res, next) => {
  try {
    const units = await Units.findAndCountAll({
      attributes: unitsAttributes.default,
    });
    res.status(200).json({
      status: 200,
      success: true,
      message: "Units fetched successfully",
      data: units,
    });
  } catch (error) {
    next(error);
  }
};

exports.UpdateUnit = async (req, res, next) => {
  try {
    const unit = await Units.update({
      ...req.body,
      updated_by: req.user_id,
    });
    res.status(200).json({
      status: 200,
      success: true,
      message: "Unit updated successfully",
      data: unit,
    });
  } catch (error) {
    next(error);
  }
};
