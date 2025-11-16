const authService = require('../services/authService');

module.exports = {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const result = await authService.login(email, password);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  }
};
