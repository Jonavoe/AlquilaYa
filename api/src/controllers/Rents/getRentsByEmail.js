const Rents = require("../../models/Rents");

const getRentsByEmail = async (email) => {
  const rentsByEmail = await Rents.findOne({ email: email });

  return rentsByEmail;
};

module.exports = getRentsByEmail;
