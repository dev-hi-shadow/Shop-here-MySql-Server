const { sequelize } = require("../../config/mysql");
const { getTableFilters, getFileNameFromFileObject } = require("../../helpers");
const PrVariationsAttr = require("../product_variations/attributes");
const brandAttributes = require("../brand/attributes");
const categoriesAttributes = require("../categories/attributes");
const subcategoriesAttributes = require("../sub-categories/attributes");
const filesAttributes = require("../files/attributes");
const unitsAttributes = require("../units/attributes");
const ratingReviewsAttributes = require("../ratings-reviews/attributes");
const PrVariationsAttributesAttr = require("../product_variation_attributes/attributes");
const {
  Products,
  PrVariations,
  Faqs,
  Brands,
  SubCategories,
  Categories,
  Units,
  Files,
  PrVariationsAttributes,
  RatingReviews,
} = require("../../models");
const _ = require("lodash");
exports.AddProduct = async (req, res, next) => {
  const transaction = await sequelize.transaction();
  try {
    // const product = await Products.create(
    //   {
    //     ...req.body,
    //     main_image,
    //     created_by: req.user_id,
    //   },
    //   { transaction }
    // );
    // if (!product) {
    //   return res.status(400).json({
    //     status: 400,
    //     success: false,
    //     message: "Something went wrong",
    //     data: null,
    //   });
    // }

    // const images = []
    // const main_images = []
    // if (req.files) {
    //   req.body.variations.forEach(variation_name => {
    //     _.map(req.files.file, (item) => getFileNameFromFileObject(item));
    //   });
    //   main_image = getFileNameFromFileObject(req.files.main_image);
    //   images = _.map(req.files.file, (item) => getFileNameFromFileObject(item));
    // }

    // if (images.length) {
    //   const uploadImage = _.map(images, (item) => ({
    //     product_id: product.id,
    //     file_name: item,
    //     created_by: req.user_id,
    //   }));
    //   images = await Files.bulkCreate(uploadImage, { transaction });
    // }
    // const product_variation = _.map(req.body.variations, (item) => ({
    //   ...item,
    //   created_by: req.user_id,
    //   updated_by: req.user_id,
    //   product_id: product.id,
    // }));

    await PrVariations.bulkCreate(product_variation, { transaction });
    let faqs = null;
    if (req.body.faqs) {
      faqs = _.map(req.body.faqs, (item) => ({
        ...item,
        created_by: req.user_id,
        updated_by: req.user_id,
        product_id: product.id,
      }));
      faqs = await Faqs.bulkCreate(faqs, { transaction });
    }

    transaction.commit();

    res.status(201).json({
      status: 201,
      success: true,
      message: "Product added successfully",
      data: {
        ...product,
        variations: product_variation,
        faqs,
        images,
        main_image,
      },
    });
  } catch (error) {
    transaction.rollback();
    next(error);
  }
};

exports.GetProducts = async (req, res, next) => {
  try {
    const { type = "default" } = req.query;
    const query = {
      include: [
        {
          model: PrVariations,
          as: "variations",
          attributes: PrVariationsAttr[type],
          include: [
            {
              model: PrVariationsAttributes,
              as: "variation_attributes",
              attributes: PrVariationsAttributesAttr[type],
            },
          ],
        },
        {
          model: RatingReviews,
          as: "rating_reviews",
          attributes: ratingReviewsAttributes[type],
        },
        {
          model: Brands,
          as: "brand",
          attributes: brandAttributes[type],
        },
        {
          model: Categories,
          as: "category",
          attributes: categoriesAttributes[type],
        },
        {
          model: SubCategories,
          as: "sub_category",
          attributes: subcategoriesAttributes[type],
        },
        {
          model: Units,
          as: "unit",
          attributes: unitsAttributes[type],
        },
        {
          model: Files,
          as: "files",
          attributes: filesAttributes[type],
        },
      ],
      distinct: true,
    };
    let products = null;
    if (req.params.id) products = await Products.findByPk(req.params.id, query);
    else products = await Products.findAndCountAll(query);

    res.status(200).json({
      status: 200,
      success: true,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

exports.UpdateProduct = async (req, res, next) => {
  // const transaction = await sequelize.transaction();
  try {
    let images,
      main_image = null;
    if (req.files) {
      main_image = getFileNameFromFileObject(req.files.main_image);
      images = _.map(req.files.file, (item) => getFileNameFromFileObject(item));
    }
    const product = await Products.create(
      {
        ...req.body,
        main_image,
        created_by: req.user_id,
      },
      { transaction }
    );
    if (!product) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Something went wrong",
        data: null,
      });
    }
    if (images.length) {
      const uploadImage = _.map(images, (item) => ({
        product_id: product.id,
        file_name: item,
        created_by: req.user_id,
      }));
      images = await Files.bulkCreate(uploadImage, { transaction });
    }
    const product_variation = _.map(req.body.variations, (item) => ({
      ...item,
      created_by: req.user_id,
      updated_by: req.user_id,
      product_id: product.id,
    }));
    await PrVariations.bulkCreate(product_variation, { transaction });
    let faqs = null;
    if (req.body.faqs) {
      faqs = _.map(req.body.faqs, (item) => ({
        ...item,
        created_by: req.user_id,
        updated_by: req.user_id,
        product_id: product.id,
      }));
      faqs = await Faqs.bulkCreate(faqs, { transaction });
    }

    transaction.commit();

    res.status(201).json({
      status: 201,
      success: true,
      message: "Product added successfully",
      data: {
        ...product,
        variations: product_variation,
        faqs,
        images,
        main_image,
      },
    });
  } catch (error) {
    next(error);
  }
};
