//Importar los paquetes
const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');

//Llamando las rutas
const routeProduct = require("./routes/products.routes.js")
const routeUser = require("./routes/users.routes.js")


//Inicializando
const app = express();
dotenv.config(); 
const port = process.env.PORT || 1000;
const corsOptions = {
    origin: 'https://mi-frontend.com'
  };

//configuración 
app.use(express.json());
app.use(cors(corsOptions));

//MIDDLEWARES (Es un metodo que se ejecuta obligatoriamente para llamar la ruta)
app.use("/api", routeProduct);
app.use("/api", routeUser);


//Rutas
app.get("/home", (req,res)=>{
    res.send("<i>Hola mundo</i>")
})
app.get("/",(req,res)=>(
    res.send(`Estas conectado en el puerto ${port}`)
))

//Puerto
app.listen(port, () => 
    console.log(`Servidor iniciado en el puerto ${port}`));



