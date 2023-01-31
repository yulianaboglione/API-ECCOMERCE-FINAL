const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

/**
 * @openapi
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         username:
 *           type: string
 *           example: Yuliana Boglione
 *         email:
 *           type: string
 *           example: yulianaboglione@gmail.com
 *     register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: Yuliana Boglione
 *         email:
 *           type: string
 *           example: yulianaboglione@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: yulianaboglione@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     request_auth:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         username:
 *           type: string
 *           example: Yuliana Boglione
 *         email:
 *           type: string
 *           example: yulianaboglione@gmail.com
 *         token:
 *           type: string
 *           example: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Impvc2VkYW5pZWxAZ21haWwuY29tIiwiaWQiOjQsImlhdCI6"
 *     request_logout:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Usuario eliminado con exito
 *     logout:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: yulianaboglione@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: Bearer
 *       bearerFormat: JWT
 */

const Users = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: (user, options) => {
        const { password } = user;
        const hash = bcrypt.hashSync(password, 8);
        user.password = hash;
      },
    },
  }
);

module.exports = Users;
