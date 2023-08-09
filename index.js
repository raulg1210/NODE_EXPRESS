const app = require('./app')
const port = 3000;

//para levantar el servidor y que funcione el código de arriba tenemos que usar el listen para escuchar por el puerto
app.listen(port, () =>{
  console.log("Servidor levantado");
})