//importamos express. Para ello se crea la variable y se usa el require que es lo mismo que import
const express = require('express')
const app = express();
const port = 3000;

//usamos la variable app y podemos usar sus endpoints para obtener informacion
//nos devolverá el request y el reponse
app.get("/hello", (req, res) =>{
  //si ha ido bien le mandamos un codigo 200 y un mensaje de que ha ido bien
  res.status(200).send({msg: "Todo OK"})
})

//para levantar el servidor y que funcione el código de arriba tenemos que usar el listen para escuchar por el puerto
app.listen(port, () =>{
  console.log("Servidor levantado");
})