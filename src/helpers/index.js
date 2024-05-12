exports.generateJWTToken = (payload, expiresIn = 86400) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn,
  });
  return token;
};

exports.formatNumberForTwilio = (number) => {
  let Number = number.replace(/\D+/g, "");
  if (!Number.startsWith("+")) {
    if (
      !Number.startsWith("91") ||
      (Number.startsWith("91") && Number?.length == 10)
    ) {
      Number = `91${Number}`;
    }
    Number = `+${Number}`;
  }
  return Number;
};

exports.getFileNameFromFileObject = (fileObject) => {
  if (Array.isArray(fileObject)) { // Check if it's an array
    return fileObject[0].path; // Access the first object's path
  } else {
    return fileObject.path; // Access the single object's path
  }
};


// exports.getTableFilters = (req = {}, params = {}) => {
//   const {
//     limit = 10,
//     offset = 0,
//     order_by = "created_at",
//     sort_by = "DESC",
//   } = req.query;
//   return {
//     limit: +limit,
//     offset: +offset,
//     sort_by,
//     order: [
//       [
//         ...order_by?.split(".")?.map((key, i, arr) => {
//           if (arr?.length === 1) {
//             return key;
//           }
//           return params?.orderArr?.filter((item) =>
//             item?.as === key ? item : false
//           )[0];
//         }),
//       ],
//     ],
//   };
// };

exports.getTableFilters = (req = {}, params = {}) => {
  const {
    limit = 10,
    offset = 0,
    order_by = "created_at",
    sort_by = "DESC",
  } = req.query;

  // Ensure limit and offset are integers and within a reasonable range
  const numericLimit = Math.max(1, Math.min(1000, parseInt(limit, 10)));
  const numericOffset = Math.max(0, parseInt(offset, 10));

  return {
    limit: numericLimit,
    offset: numericOffset,
    sort_by,
    order: [
      [
        ...order_by?.split(".")?.map((key, i, arr) => {
          if (arr?.length === 1) {
            return key;
          }
          return params?.orderArr?.filter((item) =>
            item?.as === key ? item : false
          )[0];
        }),
      ],
    ],
  };
};
