const productService = require('../services/productService');
const uploadService = require('../services/uploadService');

module.exports = {
  async index(req, res, next) {
    try {
      const products = await productService.list(req.query);
      // prepend url if image set
      const mapped = products.map(p => {
        const obj = p.toJSON();
        if (obj.image) obj.image = uploadService.fileUrl(req, obj.image);
        return obj;
      });
      res.json(mapped);
    } catch (err) { next(err); }
  },

  async store(req, res, next) {
    try {
      const data = req.body;
      if (req.file) data.image = req.file.filename;
      const created = await productService.create(data);
      res.status(201).json(created);
    } catch (err) { next(err); }
  },

  async show(req, res, next) {
    try {
      const p = await productService.find(req.params.id);
      if (!p) return res.status(404).json({ error: 'Produto não encontrado' });
      const obj = p.toJSON();
      if (obj.image) obj.image = uploadService.fileUrl(req, obj.image);
      res.json(obj);
    } catch (err) { next(err); }
  },

  async update(req, res, next) {
    try {
      const data = req.body;
      if (req.file) data.image = req.file.filename;
      const updated = await productService.update(req.params.id, data);
      res.json(updated);
    } catch (err) { next(err); }
  },

  async destroy(req, res, next) {
    try {
      await productService.remove(req.params.id);
      res.status(204).send();
    } catch (err) { next(err); }
  }
};
