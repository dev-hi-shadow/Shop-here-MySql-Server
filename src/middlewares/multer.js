const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const md5 = require("md5");
const cloudinary = require("../services/cloudinary");
const uuid = require("uuid").v4;

const upload = (directory, fieldsArray) => {
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
      limits: { fileSize: 1e6 }, 
      fileFilter: (req, file, cb) => {
         const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'mp4', 'mov', "webp"]; 
        const extension = file.originalname.split('.').pop().toLowerCase();
        if (allowedExtensions.includes(extension)) {
          cb(null, true);
        } else {
          cb(new multer.MulterError('LIMIT_FILE_TYPE', 'Invalid file type'), false);
        }
      },
    }).fields(
      fieldsArray.map((field) => ({
        limit: typeof field === 'object' ? field.limit : 1,
        name: typeof field === 'object' ? field.name : field,
      }))
    );
  } catch (error) {
    console.error(" Error in Multer configuration:", error);
    return error; // Or throw the error for better handling
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
    return result;
  } catch (error) {
    throw error; // Rethrow error to be handled by caller
  }
};

module.exports = upload;
