const db = require("../utils/database");
const initModels = require("../models/initModels");

const {
  Users,
  Orders,
  Cart,
  Products,
  ProductsInOrder,
  ProductInCart,
  Categories,
} = require("../models");

initModels();

const users = [
  {
    username: "María",
    email: "maria@gmail.com",
    password: "1234",
  },
  {
    username: "Germán ",
    email: "ger@hotmail.com",
    password: "123456",
  },
  {
    username: "Jose",
    email: "jose@email.com",
    password: "122334",
  },
];

const categories = [
  { nameCategory: "SamrtPhones" },
  { nameCategory: "SmartWatchs" },
  { nameCategory: "Cameras" },
  { nameCategory: "Computers" },
  { nameCategory: "Tv" },
];

const products = [
  {
    name: "Alpinito",
    price: 4000,
    image:
      "https://res.cloudinary.com/dpwje5siq/image/upload/v1669666340/supermercados_la_vaquita_supervaquita_alpinito_max_4u_90gr_galleta_frutos_lacteos_derivados_1024x1024_irojyy.webp",
    availableQty: 400,
    status: true,
    categoryId: 2,
    userId: 3,
  },
  {
    name: "Waffles",
    price: 2000,
    image:
      "https://res.cloudinary.com/dpwje5siq/image/upload/v1669666341/receta198_pms2hi.jpg",
    availableQty: 230,
    status: true,
    categoryId: 1,
    userId: 1,
  },
  {
    name: "Chupeta",
    price: 1000,
    image:
      "https://res.cloudinary.com/dpwje5siq/image/upload/v1669666340/D_NQ_NP_855233-MCO31561414614_072019-O_i8rek8.jpg",
    availableQty: 700,
    status: true,
    categoryId: 4,
    userId: 3,
  },
  {
    name: "Samsung",
    price: 2000000,
    image:
      "https://res.cloudinary.com/dpwje5siq/image/upload/v1669666338/samsung-galaxy-s10-1_07ddb225-8eec-4ff2-9593-eaf16d9e3684_1200x1200_crop_center_um3hzj.webp",
    availableQty: 30,
    status: true,
    categoryId: 2,
    userId: 2,
  },
  {
    name: "Huawey",
    price: 800000,
    image:
      "https://res.cloudinary.com/dpwje5siq/image/upload/v1669666343/huawei-nova-y70-color-1_ruybet.png",
    availableQty: 135,
    status: true,
    categoryId: 1,
    userId: 1,
  },
];

const carts = [
  { totalPrice: 30000, userId: 1 },
  { totalPrice: 30000, userId: 2 },
  { totalPrice: 30000, userId: 3 },
];

const pc = [
  {
    quantity: 2,
    price: 16000,
    status: true,
    cartId: 2,
    productId: 1,
  },
  {
    quantity: 1,
    price: 4000000,
    status: true,
    cartId: 1,
    productId: 4,
  },
  {
    quantity: 1,
    price: 16000,
    status: true,
    cartId: 3,
    productId: 1,
  },
];

const orders = [
  {
    totalPrice: 23000,
    status: true,
    userId: 2,
  },
  {
    totalPrice: 23000,
    status: true,
    userId: 2,
  },
  {
    totalPrice: 23000,
    status: true,
    userId: 1,
  },
  {
    totalPrice: 23000,
    status: true,
    userId: 3,
  },
];
const po = [
  {
    quantity: 4,
    price: 4000,
    status: true,
    orderId: 1,
    productId: 3,
  },
  {
    quantity: 2,
    price: 4000000,
    status: true,
    orderId: 3,
    productId: 4,
  },
  {
    quantity: 6,
    price: 12000,
    status: true,
    orderId: 2,
    productId: 2,
  },
  {
    quantity: 4,
    price: 16000,
    status: true,
    orderId: 4,
    productId: 1,
  },
];
db.sync({ force: true }).then(() => {
  console.log("Sincronizado");
  users.forEach((user) => Users.create(user));

  setTimeout(() => {
    categories.forEach((cat) => Categories.create(cat));
  }, 100);
  setTimeout(() => {
    products.forEach((product) => Products.create(product));
  }, 200);
  setTimeout(() => {
    carts.forEach((cart) => Cart.create(cart));
  }, 300);
  setTimeout(() => {
    pc.forEach((c) => ProductInCart.create(c));
  }, 400);
  setTimeout(() => {
    orders.forEach((order) => Orders.create(order));
  }, 500);
  setTimeout(() => {
    po.forEach((o) => ProductsInOrder.create(o));
  }, 600);
});
