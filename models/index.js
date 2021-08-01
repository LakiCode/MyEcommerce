// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  // where fk is category_id
  foreignKey: 'category_id',
});
// Categories have many Products
Category.hasMany(Product, {
  // where fk is product_id
  foreignKey: 'product_id',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  // where fk is product_id
  foreignKey: 'product_id',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  // where fk is tag_id
  foreignKey: 'tag_id',
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
