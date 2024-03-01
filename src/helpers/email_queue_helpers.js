/**
 * @param {string} template_name
 * @param {string}subject
 * @param {object} params
 */


exports.sendEmailBasedOnType = async (type = "", data = {}) => {
  switch (type) {
    case "NEW_SELLER_REGISTERED":
      console.log("NEW SELLER REGISTERED IN SHOP HERE");
      break;
    default:
      console.log(`${type} TYPE NOT FOUND`);
      break;
  }
};
