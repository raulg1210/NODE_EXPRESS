//importamos express. Para ello se crea la variable y se usa el require que es lo mismo que import
const express = require('express')
const app = express();
const port = 3000;

//para levantar el servidor y que funcione el código de arriba tenemos que usar el listen para escuchar por el puerto
app.listen(port, () =>{
  console.log("Servidor levantado");
})