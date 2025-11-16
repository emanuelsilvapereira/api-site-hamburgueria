const orderService = require('../services/orderService');

module.exports = {
  async store(req, res, next) {
    try {
      const created = await orderService.create(req.body);
      res.status(201).json(created);
    } catch (err) { next(err); }
  },

  async index(req, res, next) {
    try {
      const list = await orderService.list();
      res.json(list);
    } catch (err) { next(err); }
  },

  async show(req, res, next) {
    try {
      const order = await orderService.find(req.params.id);
      res.json(order);
    } catch (err) { next(err); }
  },

  async update(req, res, next) {
    try {
      const updated = await orderService.updateStatus(req.params.id, req.body.status);
      res.json(updated);
    } catch (err) { next(err); }
  }
};
