const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const md5 = require("md5");
const cloudinary = require("../services/cloudinary");
const uuid = require("uuid").v4;

const upload = (directory) => {
  try {
    return multer({
      storage: new CloudinaryStorage({
        cloudinary: cloudinary,
        params: {
          folder: directory,
          unique_filename: true,
          overwrite: true,
          format: async (req, file) => file.originalname.split(".").pop(),
          public_id: (req, file) => `${md5(uuid())}`,
        },
      }),
    });
  } catch (error) {
    next(error);
  }
};

module.exports = upload;
