const { Category } = require('../models');

module.exports = {
  async list() {
    return await Category.findAll({ order: [['name','ASC']] });
  },

  async create(data) {
    return await Category.create(data);
  },

  async find(id) {
    return await Category.findByPk(id);
  },

  async update(id, data) {
    const cat = await Category.findByPk(id);
    if (!cat) throw new Error('Categoria não encontrada');
    return await cat.update(data);
  },

  async remove(id) {
    const cat = await Category.findByPk(id);
    if (!cat) throw new Error('Categoria não encontrada');
    await cat.destroy();
  }
};
