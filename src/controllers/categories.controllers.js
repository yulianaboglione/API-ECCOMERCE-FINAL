const { CategoriesServices } = require("../services");

const seeCategories = async (req, res, next) => {
  try {
    const result = await CategoriesServices.getAllCategories();
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal, o no hay productos que mostrar. Agrega nuevos productos al carrito",
    });
  }
}
const addCategories = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await CategoriesServices.postCategories(body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
}


module.exports = {
  addCategories,
  seeCategories,
};