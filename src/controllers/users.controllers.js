const { UserServices } = require("../services");
const transporter = require("../utils/mailter");
const welcomeTemplate = require("../templates/welcome");

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.createUser(newUser);
    res.status(201).json(result);

    transporter.sendMail({
      from: "<yulianaboglione@gmail.com>",
      to: result.email,
      subject: "Bienvenido My shop",
      text: `Hola ${result.username} bienvenido a la mejor tienda de productos online`,
      html: welcomeTemplate(result.username),
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const users = await UserServices.getUser(id);
    res.json(users);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};

module.exports = {
  userRegister,
  getUser,
};
