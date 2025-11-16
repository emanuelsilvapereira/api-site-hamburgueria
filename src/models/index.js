const sequelize = require('../config/db');
const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const Order = require('./Order');
const OrderItem = require('./OrderItem');

// initialize models (they receive sequelize if defined that way)
User.initModel(sequelize);
Category.initModel(sequelize);
Product.initModel(sequelize);
Order.initModel(sequelize);
OrderItem.initModel(sequelize);

// associations
Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });

Order.hasMany(OrderItem, { foreignKey: 'order_id', as: 'items' });
OrderItem.belongsTo(Order, { foreignKey: 'order_id' });
OrderItem.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = { sequelize, User, Category, Product, Order, OrderItem };
