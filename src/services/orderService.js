const { Order, OrderItem, Product } = require('../models');
const sequelize = require('../config/db');

module.exports = {
  async create(payload) {
    // payload: { customer_name, customer_phone, items: [{ product_id, qty, name, price }] }
    const t = await sequelize.transaction();
    try {
      const total = payload.items.reduce((s,i) => s + (Number(i.price) * Number(i.qty)), 0);
      const order = await Order.create({
        customer_name: payload.customer_name,
        customer_phone: payload.customer_phone,
        total,
        status: 'pending'
      }, { transaction: t });

      for (const it of payload.items) {
        await OrderItem.create({
          order_id: order.id,
          product_id: it.product_id || null,
          name: it.name,
          price: it.price,
          qty: it.qty
        }, { transaction: t });
      }

      await t.commit();
      return order;
    } catch (err) {
      await t.rollback();
      throw err;
    }
  },

  async list() {
    return await Order.findAll({ order: [['created_at','DESC']] });
  },

  async find(id) {
    return await Order.findByPk(id, { include: [{ model: OrderItem, as: 'items' }] });
  },

  async updateStatus(id, status) {
    const o = await Order.findByPk(id);
    if (!o) throw new Error('Pedido não encontrado');
    o.status = status;
    await o.save();
    return o;
  }
};
