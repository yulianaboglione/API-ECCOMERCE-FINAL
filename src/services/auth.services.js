const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class AuthServices {
  static async authenticate(credentials) {
    try {
      const { email, password } = credentials;
      const result = await Users.findOne({
        where: { email },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      if (result) {
        const isValid = bcrypt.compareSync(password, result.password);
        return isValid ? { isValid, user: result } : isValid;
      } else {
        return result;
      }
    } catch (error) {
      throw error;
    }
  }

  static genToken(data) {
    try {
      const token = jwt.sign(data, process.env.JWT_SECRET, {
        algorithm: "HS512",
      });
      return token;
    } catch (error) {
      throw error;
    }
  }
  static async logout(credentials) {
    try {
      const { email, password } = credentials;
      const user = await Users.findOne({
        where: { email },
      });
      // console.log(user)
      if (user) {
        const isValid = bcrypt.compareSync(password, user.password);
        return isValid
          ? {
              remove: await user.destroy(),
              message: "usuario eliminado correctamente",
            }
          : { message: "Contraseña incorrecta" };
      } else {
        return { message: "Email incorrecto" };
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthServices;
