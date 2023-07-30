const express = require('express');
//importamos el controller 
const helloController = require('../controllers/hello')

//para generar las rutas creamos la variable api y usamos las rutas de express
const api = express.Router();

//usamos la funcion getHello del controller para obtener los datos en esa ruta
api.get("/hello", helloController.getHello());

module.exports = api;