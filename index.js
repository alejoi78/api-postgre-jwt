
// console.log("Hola".green);

// let nombre = "Angel";
// console.log(nombre);

// const fs = require("fs")
// const colors = require('colors');
// const os = require("os");
// console.log("Saitama".rainbow);
// console.log(os.platform().red);
// console.log(os.release().red);

// fs.copyFile("package.json","copia.json",(err)=>{
//     if (err) console.log("error".red)
// });

// const express = require("express");
// const app = express();

// app.get("/",(req, res)=>{
//     res.send(`/imagen.html`)
// })

// app.get("/xd",(req, res)=>{
//     res.send("What's up nigga?")
// })

// app.listen(4000,()=>{
//     console.log(`Se ha conectado al puerto 4000`.green);
// }

//Importar los paquetes
const express = require('express');
const dotenv = require("dotenv");

//Llamando las rutas
const routeProduct = require("./routes/products.routes.js")
const routeUser = require("./routes/users.routes.js")


//Inicializando
const app = express();
dotenv.config(); 
const port = process.env.PORT || 1000;

//configuración 
app.use(express.json());

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



