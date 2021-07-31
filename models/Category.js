const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
          type: DataTypes.INTEGER,
          allowNull: false,
      // instruct that this is the Primary Key with auto increment set to true
      primaryKey: true,
      autoIncrement: true
    },
    // define a category_name column string, no null values
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
