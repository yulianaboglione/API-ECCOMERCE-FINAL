const app = require("./app");
const swaggerDocs = require("../swagger");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}/`);
  swaggerDocs(app, PORT);
});

module.exports = server;
