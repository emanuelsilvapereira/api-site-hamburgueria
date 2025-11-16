const { DataTypes, Model } = require('sequelize');

class OrderItem extends Model {
  static initModel(sequelize) {
    OrderItem.init({
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      order_id: { type: DataTypes.INTEGER },
      product_id: { type: DataTypes.INTEGER },
      name: { type: DataTypes.STRING },
      price: { type: DataTypes.DECIMAL(10,2) },
      qty: { type: DataTypes.INTEGER, defaultValue: 1 }
    }, { sequelize, modelName: 'order_item', tableName: 'order_items' });
    return OrderItem;
  }
}

module.exports = OrderItem;
