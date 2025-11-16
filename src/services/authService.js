const { User } = require('../models');
const { compare } = require('../utils/password');
const { sign } = require('../utils/token');

module.exports = {
  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('Usuário não encontrado');
    const ok = await compare(password, user.password);
    if (!ok) throw new Error('Credenciais inválidas');
    const token = sign({ id: user.id, email: user.email, role: user.role });
    return { user: { id: user.id, name: user.name, email: user.email, role: user.role }, token };
  }
};
