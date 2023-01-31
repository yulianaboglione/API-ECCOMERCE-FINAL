const { Cart, ProductInCart, Products } = require("../models");

class CartServices {

  static async readCart(id) {

    try {
      const result = await Cart.findOne({
        where: { id },
        attributes: {
          exclude: ["userId", "user_id"]
        },
        include: {
          model: ProductInCart,
          as: "products",
          attributes: {
            exclude: ["cartId", "cart_id", "productId", "product_id"]
          },
          include: {
            model: Products,
            as: "product",
            attributes: ["id", "name", "price", "image"]
          }
        },
      });
      const totalPriceCartArray = await ProductInCart.findAll();
      const cart = await Cart.findOne({where: {id}});
      const totalPriceCart = [];
      totalPriceCartArray.forEach( async(total) => { 
        totalPriceCart.push(total.price);
        const priceTotal = totalPriceCart.reduce((a, b) => a + b);
        await cart?.update({totalPrice: priceTotal});
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async addCart(id, product) {
    try {

      const idProduct = product.productId;
      const priceProduct =  await Products.findOne({ where: {id:idProduct}});
      const priceTotalProduct = product.quantity * priceProduct?.price;
      const result = await ProductInCart.create({...product, price: priceTotalProduct, cartId: id, productId: idProduct});

      const totalPriceCartArray = await ProductInCart.findAll();
      const totalPriceCart = totalPriceCartArray.map(total => { return total.price});
      const priceTotal = totalPriceCart.reduce((a, b) => a + b);
      const cart = await Cart.findOne({where: {id}})
      const res = await cart.update({totalPrice: priceTotal})
      return result;
    } catch (error) {
      throw error;
    }
  } 
  static async upCart(idCart, idProduct, quantity) {
    try {
      const prod = await ProductInCart.findAll({ where: { cartId: idCart } })
      prod.map( async(pro) => {
        if (Number(idProduct) === pro.dataValues.productId){
          await pro.update(quantity)
        }
        if (Number(idProduct) === pro.dataValues.productId){
          const priceProduct =  await Products.findOne({ where: {id:idProduct}});
          const price = pro.quantity * priceProduct.price;
          await pro.update({price: price});
        }
        const totalPriceCartArray = await ProductInCart.findAll();
        const cart = await Cart.findOne({where: {id: idCart}});
        const totalPriceCart = [];
        totalPriceCartArray.forEach( async(total) => { 
          totalPriceCart.push(total.price);
          const priceTotal = totalPriceCart.reduce((a, b) => a + b);
          await cart.update({totalPrice: priceTotal});
        });
      })

      return prod;
    } catch (error) {
      throw error;
    }
  } 
  static async delCart(idCart, idProduct) {
    try {
      const prod = await ProductInCart.findAll({ where: { cartId: idCart } })
      prod.map( async(pro) => {
        if (Number(idProduct) === pro.dataValues.id){
          pro.destroy()
        }
        const totalPriceCartArray = await ProductInCart.findAll();
        const cart = await Cart.findOne({where: {id: idCart}});
        const totalPriceCart = [];
        totalPriceCartArray.forEach( async(total) => { 
          totalPriceCart.push(total.price);
          const priceTotal = totalPriceCart.reduce((a, b) => a + b);
          await cart.update({totalPrice: priceTotal});
        });
      })
      

      return prod;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = CartServices;