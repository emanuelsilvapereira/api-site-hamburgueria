const { Product } = require('../models');

module.exports = {
  async list(filter = {}) {
    const where = {};
    if (filter.category_id) where.category_id = filter.category_id;
    return await Product.findAll({ where, order: [['name','ASC']] });
  },

  async create(data) {
    return await Product.create(data);
  },

  async find(id) {
    return await Product.findByPk(id);
  },

  async update(id, data) {
    const p = await Product.findByPk(id);
    if (!p) throw new Error('Produto não encontrado');
    return await p.update(data);
  },

  async remove(id) {
    const p = await Product.findByPk(id);
    if (!p) throw new Error('Produto não encontrado');
    await p.destroy();
  }
};
