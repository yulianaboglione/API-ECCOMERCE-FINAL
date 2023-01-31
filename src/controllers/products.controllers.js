const { ProductsServices } = require("../services");

const getProductsAll = async (req, res, next) => {
  try {
    const allProducts = await ProductsServices.getProdAll();
    const productsAvailable = [];
    allProducts.forEach((e) => {
      if( e.availableQty > 0) {
          productsAvailable.push(e);
      }
    })

    res.json(productsAvailable);
  } catch (error) {
    next({
        message: 'no se pudo obtener los productos',
        status:400,
        errorContent: error
    })
  }
}
const getProducts = async (req, res, next) => {
  try {
    const { id }  = req.params;
    const products = await ProductsServices.getProd(id);
    const productsAvailable = [];
    products.products.forEach((e) => {
      if( e.availableQty > 0) {
          productsAvailable.push(e);
      }
    })
    res.json({username: products.dataValues.username, products: productsAvailable});
  } catch (error) {
    next({
        message: 'no se pudo obtener los productos',
        status:400,
        errorContent: error
    })
  }
}
const getIdProducts = async (req, res, next) => {
  try {
    const { id }  = req.params;
    const result = await ProductsServices.getIdProd(id);
    res.json({...result});
  } catch (error) {
    next({
        message: 'no se pudo obtener los productos',
        status:400,
        errorContent: error
    })
  }
}
const createProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await ProductsServices.createProd(id, body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
}
const updateProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await ProductsServices.updateProd(id, body);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal, NO exite token",
    });
  }
}
const deleteProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await ProductsServices.deleteProd(id);
    res.json({message: "Producto eliminado correctamente"});
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};

module.exports = {
  getProductsAll,
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
  getIdProducts,
};
