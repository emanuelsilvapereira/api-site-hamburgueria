const { hash, compare } = require("../utils/password");
const { User } = require("../models");

module.exports = {
  async create(data) {
    if (data.password) data.password = await hash(data.password);
    const created = await User.create(data);
    return created;
  },

  async list() {
    return await User.findAll({ attributes: ['id','name','email','role','created_at'] });
  },

  async find(id) {
    return await User.findByPk(id, { attributes: ['id','name','email','role'] });
  },

  async update(id, data) {
    const user = await User.findByPk(id);
    if (!user) throw new Error('Usuário não encontrado');
    if (data.password) data.password = await hash(data.password);
    await user.update(data);
    return user;
  },

  async remove(id) {
    const user = await User.findByPk(id);
    if (!user) throw new Error('Usuário não encontrado');
    await user.destroy();
  }
};
