const jwt = require("jsonwebtoken");
const { json } = require("sequelize");
require("dotenv").config();

const authenticate = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  if (bearerToken) {
    const token = bearerToken.split("Bearer ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET, "HS512");
      next();
    } catch (error) {
      next({
        status: 400,
        errorContent: error,
        message: "Invalid Token",
      });
    }
  } else {
    res.json({ message: "You have not logged in" });
  }
};

module.exports = authenticate;
