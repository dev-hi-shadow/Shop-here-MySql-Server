const { AdminNotify, SellerNotify, CustomerNotify } = require("../../models");

exports.GetAlerts = async (req, res, next) => {
  try {
    let alerts = null;
    if (["ADMIN", "SUPER_ADMIN"].includes(req.user.role.name)) {
      alerts = await AdminNotify.findAll({
        where: {
          user_id: req.user_id,
        },
      });
    } else if (req.user.role.name === "SELLER") {
      alerts = await SellerNotify.findAll({
        where: {
          user_id: req.user_id,
        },
      });
    } else if (req.user.role.name === "CUSTOMER") {
      alerts = await CustomerNotify.findAll({
        where: {
          user_id: req.user_id,
        },
      });
    }
    if (!alerts) {
      return res.status(400).json({
        status: false,
        message: "Something went wrong! Please try after sometime.",
      });
    }
    return res.status(200).json({
      status: 200,
      success: true,
      message: `Alerts Fetched Successfully `,
      data: alerts,
    });
  } catch (error) {
    next(error);
  }
};

exports.CreateUserAlerts = async (req, res, next) => {
  try {
    let alerts = null;
    if (["ADMIN", "SUPER_ADMIN"].includes(req.user.role.name)) {
      alerts = await AdminNotify.create({
        ...req.body,
        user_id: req.user_id,
      });
    } else if (req.user.role.name === "SELLER") {
      alerts = await SellerNotify.create({
        ...req.body,
        user_id: req.user_id,
      });
    } else if (req.user.role.name === "CUSTOMER") {
      alerts = await CustomerNotify.create({
        ...req.body,
        user_id: req.user_id,
      });
    }
    if (!alerts) {
      return res.status(400).json({
        status: false,
        message: "Something went wrong! Please try after sometime.",
      });
    }
    return res.status(201).json({
      status: 201,
      success: true,
      message: "Alerts Created successfully",
      data: alerts,
    });
  } catch (error) {}
};

exports.UpdateAlerts = async (req, res, next) => {
  try {
    let alerts = null;
    if (["ADMIN", "SUPER_ADMIN"].includes(req.user.role.name)) {
      alerts = await AdminNotify.update(
        {
          ...req.body,
        },
        {
          where: {
            user_id: req.user_id,
          },
        }
      );
    } else if (req.user.role.name === "SELLER") {
      alerts = await SellerNotify.update(
        {
          ...req.body,
        },
        {
          where: {
            user_id: req.user_id,
          },
        }
      );
    } else if (req.user.role.name === "CUSTOMER") {
      alerts = await CustomerNotify.update(
        {
          ...req.body,
        },
        {
          where: {
            user_id: req.user_id,
          },
        }
      );
    }
    if (!alerts) {
      return res.status(400).json({
        status: false,
        message: "Something went wrong! Please try after sometime.",
      });
    }

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Alerts Updated successfully",
      data: alerts,
    });
  } catch (error) {}
};
