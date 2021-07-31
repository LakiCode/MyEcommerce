// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // instruct that this is the Primary Key with auto increment set to true
      primaryKey: true,
      autoIncrement: true,
    },
    // define a product name column -> string, no null values
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // define a price column -> decimal, no null values and validate that the value is a decimal
    product_name: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
      isDecimal: true
      }
    },
    // define a sock column -> intiger, no null values, default value of 10, validate that the value is numeric
    product_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
        }

    },
    // define a category_id -> integer, fk for category model's id
    category_id: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
