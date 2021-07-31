const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // instruct that this is the Primary Key with auto increment set to true
      primaryKey: true,
      autoIncrement: true,
    },
    // define a fk product_id column int, fk for product model's id
    product_id: {
      type: DataTypes.ITEGER,
      allowNull: false,
    },
     // define a fk tag_id column int, fk for tag model's id
     tag_id: {
      type: DataTypes.ITEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
