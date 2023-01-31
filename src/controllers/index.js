const { userLogin, deleteLogout } = require("./auth.controllers");
const {userRegister, getUser} = require("./users.controllers");
const { 
  getProductsAll, 
  getProducts, 
  createProducts, 
  updateProducts, 
  deleteProducts,
  getIdProducts 
} = require("./products.controllers");
const { addProducts, seeCart, updateCart, deleteCart } = require("./cart.controllers");
const { createOrder, getOrder } = require("./orders.controllers");
const { addCategories, seeCategories }  = require("./categories.controllers");

module.exports = {
  userLogin,
  userRegister,
  getUser,
  getProductsAll,
  getProducts,
  createProducts,
  addProducts,
  seeCart,
  createOrder,
  getOrder,
  addCategories,
  seeCategories,
  deleteLogout,
  updateProducts,
  deleteProducts,
  updateCart,
  deleteCart,
  getIdProducts,
}