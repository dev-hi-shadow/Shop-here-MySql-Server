exports.generateJWTToken = (payload, expiresIn = 86400) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn,
  });
  return token;
};

exports.formatNumberForTwilio = (number) => {
  let Number = number.replace(/\D+/g, "");
  if (!Number.startsWith("+")) {
    Number = `+91${Number}`;
  }
  return Number;
};

