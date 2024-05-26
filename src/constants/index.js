const QUEUE_INFO = {
  ASYNC_EMAIL_QUEUE: {
    NAME: "SHOP-HERE-EMAIL-QUEUE",
    LIMIT: 5,
  },
  GENARAL_QUEUE: {
    NAME: "SHOP-HERE-GENERAL-QUEUE",
    LIMIT: 5,
  },
  SMS_QUEUE: {
    NAME: "SHOP-HERE-SMS-QUEUE",
    LIMIT: 5,
  },
  NOTIFICATION_QUEUE: {
    NAME: "SHOP-HERE-NOTIFICATION-QUEUE",
    LIMIT: 5,
  },
};

const ROLES = ["SUPER_ADMIN", "ADMIN", "SELLER", "CUSTOMER"];

const CLOUDINARY_FOLDER = (body) => {
  return body.type.split("_")[0];
};

module.exports = {
  QUEUE_INFO,
  CLOUDINARY_FOLDER,
  ROLES,
};
