const { getFileNameFromFileObject } = require("../../helpers");
const { deleteFile } = require("../../middlewares/multer");
const { Brands } = require("../../models");
const { defaultAttributes } = require("./attribute");
const cloudinary = require("../../services/cloudinary");

exports.CreateBrand = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(422).json({
        status: 422,
        success: false,
        message: "Please upload a brand logo/picture.",
      });
    }
    const image = getFileNameFromFileObject(req.file);
    const brand = await Brands.create({
      ...req.body,
      image,
      updated_by: req.user_id,
      created_by: req.user_id,
    });
    res.status(201).json({
      status: 201,
      success: true,
      data: brand,
      message: "Brand created successfully.",
    });
  } catch (error) {
    next(error);
  }
};

exports.GetBrands = async (req, res, next) => {
  try {
    const brands = await Brands.findAndCountAll({
      attributes: defaultAttributes,
    });
    res.status(200).json({
      status: 200,
      success: true,
      data: brands,
      message: "Brand fetched successfully.",
    });
  } catch (error) {
    next(error);
  }
};

exports.UpdateBrand = async (req, res, next) => {
  try {
    if (req.body.verified === true) req.body.verified_at = new Date();
    if (req.body.verified === false) req.body.verified_at = null;
    if (req.body.verified === true) req.body.published_at = new Date();
    if (req.body.is_published === false) req.body.published_at = null;

    if (req.file) {
      const image = getFileNameFromFileObject(req.file);
      req.body.image = image;
    }

    const brand = await Brands.update(
      {
        ...req.body,
        updated_by: req.user_id,
      },
      {
        where: { id: req.params.id },
      }
    );

    res.status(200).json({
      status: 200,
      success: true,
      data: brand,
      message: "Brand updated successfully.",
    });
  } catch (error) {
    next(error);
  }
};

exports.DeleteBrand = async (req, res, next) => {
  try {
    const brand = await Brands.destroy({
      ...req.body,
      deleted_by: req.user_id,
    });
    res.status(200).json({
      status: 200,
      success: true,
      message: "Brand deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
};
