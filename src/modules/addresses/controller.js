const { Addresses } = require("../../models");
const { defaultAttributes } = require("./attributes");

exports.AddAddress = async (req, res, next) => {
  try {
    const address = await Addresses.create({
      ...req.body,
      updated_by: req.user_id,
      created_by: req.user_id,
      updated_by: req.user_id,
    });
    res.status(201).json({
      status: 201,
      success: true,
      data: address,
      message: "Address created successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.GetAddresses = async (req, res, next) => {
  try {
    const addresses = await Addresses.findAll({
      where: {
        user_id: req.user_id,
      },
      attributes: defaultAttributes,
    });
    res.status(200).json({
      status: 200,
      success: true,
      data: addresses,
      message: "Address fetched successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.UpdateAddress = async (req, res, next) => {
  try {
    const address = await Addresses.update(
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
      data: address,
      message: "Address updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.DeleteAddress = async (req, res, next) => {
  try {
    const address = await Addresses.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      status: 200,
      success: true,
      data: address,
      message: "Address deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
