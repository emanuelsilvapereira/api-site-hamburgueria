const { DataTypes, Model } = require('sequelize');

class Product extends Model {
  static initModel(sequelize) {
    Product.init({
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      category_id: { type: DataTypes.INTEGER, allowNull: true },
      name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT },
      price: { type: DataTypes.DECIMAL(10,2), allowNull: false, defaultValue: 0 },
      image: { type: DataTypes.STRING },
      active: { type: DataTypes.BOOLEAN, defaultValue: true }
    }, { sequelize, modelName: 'product', tableName: 'products' });
    return Product;
  }
}

module.exports = Product;
