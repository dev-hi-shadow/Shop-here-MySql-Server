const { Offers } = require("../../models");

exports.AddOffer = async (req, res, next) => {
  try {
    console.log("req.body" , req.body)
    const offer = await Offers.create({ ...req.body, created_by: req.user_id });
    res.status(201).json({
      status: 201,
      success: true,
      message: "Offer created successfully",
      data: offer,
    });
  } catch (error) {
    next(error);
  }
};
exports.UpdateOffer = async (req, res, next) => {
  try {
    const offer = await Offers.update(
      { ...req.body, updated_by: req.user_id },
      {
        where: { id: req.params.id },
      }
    );
    res.status(201).json({
      status: 201,
      success: true,
      message: "Offer created successfully",
      data: offer,
    });
  } catch (error) {
    next(error);
  }
};
exports.GetOffers = async (req, res, next) => {
  try {
    let offers,
      offer = null;
    if (req.params.id) offer = await Offers.findByPk(req.params.id);
    else offers = await Offers.findAndCountAll();
    res.status(201).json({
      status: 201,
      success: true,
      message: "Offer created successfully",
      data: offers || offer,
    });
  } catch (error) {
    next(error);
  }
};
