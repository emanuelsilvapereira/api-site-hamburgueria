const bcrypt = require("bcrypt");

module.exports = {
  async hash(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  },

  async compare(password, hashed) {
    return await bcrypt.compare(password, hashed);
  }
};
