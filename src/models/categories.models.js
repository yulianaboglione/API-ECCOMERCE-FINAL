const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     request_categories:
 *       type: object
 *       properties:
 *         nameCategory:
 *           type: string
 *           example: SmartPhnes
 *     add_categorie:
 *       type: object
 *       properties:
 *         nameCategory:
 *           type: string
 *           example: SmartPhnes
 */


const Categories = db.define(
  "categories",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nameCategory: {
      type: DataTypes.STRING,
      field: "name_category",
      allowNull: false,
    },
  },{
    timestamps: false,
  }
);

module.exports = Categories;