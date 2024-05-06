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

/**
 * Deletes a file from Cloudinary using its public ID.
 * @param {string} publicId - The public ID of the file to delete.
 * @param {function} next - The next middleware function in the express chain.
 */

exports.deleteFile = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    console.log("Delete Result:", result);
    return result;
  } catch (error) {
    throw error; // Rethrow error to be handled by caller
  }
};

module.exports = upload;
