const { CartServices } = require("../services");

const seeCart = async (req, res, next) => {
  try {
    const { id }  = req.params;
    const result = await CartServices.readCart(id);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal, o no hay productos que mostrar. Agrega nuevos productos al carrito",
    });
  }
}
const addProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await CartServices.addCart(id, body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
}
const updateCart = async (req, res, next) => {
  try {
    const { cartId, productId } = req.params;
    const quatity = req.body;
    const result = await CartServices.upCart(cartId, productId, quatity);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    }); 
  }
}
const deleteCart = async (req, res, next) => {
  try {
    const { cartId, productId } = req.params;
    const result = await CartServices.delCart(cartId, productId);
    res.json({message: "Producto eliminado del carrito con exito"});
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
}


module.exports = {
  addProducts,
  seeCart,
  updateCart,
  deleteCart,
};