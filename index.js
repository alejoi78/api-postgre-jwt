const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();

//Llamando las rutas
// const routeProduct = require("./routes/products.routes.js")
const routeUser = require("./routes/users.routes.js");
const routeAuth = require("./routes/authenticate.routes.js");

// Cadena de conexión a la base de datos
const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DB}`;

//MIDDLEWARES
// app.use("/api", routeProduct);
app.use("/api", routeUser);
app.use("/api", routeAuth);

// Creando un objeto Pool para manejar conexiones a la base de datos
const pool = new Pool({
  connectionString: connectionString,
});

// Conectándose a la base de datos
pool.connect((err) => {
  if (err) {
    console.error("Connection error", err.stack);
  } else {
    console.log("Conectado a la base de datos exitosamente!");
  }
});

// Definiendo una ruta de prueba
app.get("/", (req, res) => {
  res.send("La API está funcionando!");
});

// Iniciando el servidor
app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});

// Cerrando la conexión a la base de datos
pool.end();
