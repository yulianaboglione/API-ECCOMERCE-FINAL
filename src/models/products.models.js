const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     request_product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Alpinito
 *         price:
 *           type: number
 *           example: 4000
 *         image:
 *           type: array
 *           example: [
 *             https://bit.ly/3Y1d0I7,
 *             https://bit.ly/3Y1d0I7,
 *             https://bit.ly/3Y1d0I7
 *           ]
 *         description:
 *           type: text
 *           example: Escribe aquí cualquier cosa
 *         availableQty:
 *           type: number
 *           example: 5
 *         status:
 *           type: boolean
 *           example: true
 *         categoryId:
 *           type: number
 *           example: 1
 *         userId:
 *           type: number
 *           example: 1
 *     create_product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Alpinito
 *         price:
 *           type: number
 *           example: 4000
 *         image:
 *           type: array
 *           example: [
 *             https://bit.ly/3Y1d0I7,
 *             https://bit.ly/3Y1d0I7,
 *             https://bit.ly/3Y1d0I7
 *           ]
 *         description:
 *           type: text
 *           example: Escribe aquí cualquier cosa
 *         availableQty:
 *           type: number
 *           example: 5
 *         status:
 *           type: boolean
 *           example: true
 *         categoryId:
 *           type: number
 *           example: 1
 *     update_product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Alpinito
 *         price:
 *           type: number
 *           example: 4000
 *         image:
 *           type: array
 *           example: [
 *             https://bit.ly/3Y1d0I7,
 *             https://bit.ly/3Y1d0I7,
 *             https://bit.ly/3Y1d0I7
 *           ]
 *         description:
 *           type: text
 *           example: Escribe aquí cualquier cosa
 *         availableQty:
 *           type: number
 *           example: 5
 *     request_product_delete:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Producto eliminado correctamente
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: Bearer
 *         bearerFormat: JWT
 */

const Products = db.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    availableQty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "available_qty",
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "category_id",
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Products;
