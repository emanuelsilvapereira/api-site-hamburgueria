const { DataTypes, Model } = require('sequelize');

class Order extends Model {
  static initModel(sequelize) {
    Order.init({
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      customer_name: { type: DataTypes.STRING },
      customer_phone: { type: DataTypes.STRING },
      total: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 },
      status: { type: DataTypes.STRING, defaultValue: 'pending' }
    }, { sequelize, modelName: 'order', tableName: 'orders' });
    return Order;
  }
}

module.exports = Order;
