const categoryService = require('../services/categoryService');

module.exports = {
  async index(req, res, next) {
    try {
      const list = await categoryService.list();
      res.json(list);
    } catch (err) { next(err); }
  },

  async store(req, res, next) {
    try {
      const created = await categoryService.create(req.body);
      res.status(201).json(created);
    } catch (err) { next(err); }
  },

  async show(req, res, next) {
    try {
      const cat = await categoryService.find(req.params.id);
      res.json(cat);
    } catch (err) { next(err); }
  },

  async update(req, res, next) {
    try {
      const updated = await categoryService.update(req.params.id, req.body);
      res.json(updated);
    } catch (err) { next(err); }
  },

  async destroy(req, res, next) {
    try {
      await categoryService.remove(req.params.id);
      res.status(204).send();
    } catch (err) { next(err); }
  }
};
