const { Op } = require("sequelize");
const UserZipCodes = require("./model");
const _ = require("lodash");

exports.UpdateZipCodes = async (req, res, next) => {
  try {
    const user_id = req.isAdmin ? req.body.user_id : req.user_id;
    let userZipCodes = await UserZipCodes.findAndCountAll({
      where: {
        created_by: user_id,
      },
    });
    userZipCodes = _.map(userZipCodes.rows, "zip_code");
    const filterZipcodes = req.body.zip_codes.filter(
      (item) => !userZipCodes.includes(item)
    );
    await UserZipCodes.destroy({
      where: {
        [Op.and]: [
          {
            zip_code: {
              [Op.notIn]: req.body.zip_codes,
            },
          },
          {
            created_by: user_id,
          },
        ],
      },
    });
    console.log(
      _.map(filterZipcodes, (item) => ({
        zip_code: item,
        created_by: user_id,
        updated_by: req.user_id,
      }))
    );
    const data = await UserZipCodes.bulkCreate(
      _.map(filterZipcodes, (item) => ({
        zip_code: item,
        created_by: user_id,
        updated_by: req.user_id,
      }))
    );
    res.status(200).json({
      status: 200,
      success: true,
      data: data,
      message: "Zipcodes updated successfully",
    });
  } catch (error) {
    next(error);
  }
};
