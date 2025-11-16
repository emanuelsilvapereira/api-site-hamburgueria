const { DataTypes, Model } = require('sequelize');

class Category extends Model {
  static initModel(sequelize) {
    Category.init({
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      slug: { type: DataTypes.STRING }
    }, { sequelize, modelName: 'category', tableName: 'categories' });
    return Category;
  }
}

module.exports = Category;
