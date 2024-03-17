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
  return fileObject.path;
};
