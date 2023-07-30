const express = require("express");
const app = express();

//cargar rutas
const hello_routes = require("./routes/hello")

//rutas base. En /api podemos acceder ademas a todas nuestras rutas
app.use("/api", hello_routes)

module.exports = app;