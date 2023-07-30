//creamos una funcion de prueba para ver si hace bien la peticion y le mandamos que todo esta OK
//para que sea accesible tenemos que exportar la funcion y usamos el module.exports
function getHello(req, res){
  res.status(200).send({
    msg: "Todo esta OK"
  })
}

module.exports = {
  getHello,
}