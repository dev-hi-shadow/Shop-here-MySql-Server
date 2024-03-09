const { Attributes } = require("../../models");
const { defaultAttributes } = require("./attributes");

exports.AddAttribte = async (req, res, next) => {
  try {
    const attribute = await Attributes.create({
      ...req.body,
      created_by: req.user_id,
    });
    res.status(201).json({
      status: 201,
      success: true,
      message: "Attribute Created successfully",
      data: attribute,
    });
  } catch (error) {
    next(error);
  }
};

exports.GetAttribtes = async (req, res, next) => {
  try {
    const attributes = await Attributes.findAll({
      include: {
        model: Attributes,
        as: "attribute_id",
        attributes: defaultAttributes,
      },
    });
    res.status(200).json({
      status: 200,
      success: true,
      message: "Attribute fetched successfully",
      data: attributes,
    });
  } catch (error) {
    next(error);
  }
};

exports.UpdateAttribte = async (req, res, next) => {
  try {
    const attribute = await Attributes.update(
      {
        ...req.body,
        updated_by: req.user_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({
      status: 200,
      success: true,
      message: "Attribute updated successfully",
      data: attribute,
    });
  } catch (error) {
    next(error);
  }
};

exports.DeleteAttribute = async (req, res, next) => {
  try {
    const attribute = await Attributes.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      status: 200,
      success: true,
      message: "Attribute deleted successfully",
    });
  } catch (error) {}
};
