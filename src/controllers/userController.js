const userService = require('../services/userService');

module.exports = {
  async store(req, res, next) {
    try {
      const created = await userService.create(req.body);
      return res.status(201).json(created);
    } catch (err) { next(err); }
  },

  async index(req, res, next) {
    try {
      const users = await userService.list();
      return res.json(users);
    } catch (err) { next(err); }
  },

  async show(req, res, next) {
    try {
      const user = await userService.find(req.params.id);
      return res.json(user);
    } catch (err) { next(err); }
  },

  async update(req, res, next) {
    try {
      const updated = await userService.update(req.params.id, req.body);
      return res.json(updated);
    } catch (err) { next(err); }
  },

  async destroy(req, res, next) {
    try {
      await userService.remove(req.params.id);
      return res.status(204).send();
    } catch (err) { next(err); }
  }
};
