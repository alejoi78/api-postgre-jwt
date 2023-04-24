const {Router} = require("express");
const { insert,update,delet,find, findAll } = require("../controller/users.cotrollers")


const route = Router();
// mostrar
route.get("/user/id", find)
    // res.send("Mostrar todos los usuarios");

// mostrar
route.get("/user", findAll)
    // res.send("Mostrar todos los usuarios");

// Insertar
route.post("/user", insert)
    // res.send("Insertar un usuario");

// actualizar
route.put("/user", update)
    // res.send("Actualizar un usuario");

// eliminar
route.delete("/user/:id", delet)
    // res.send("Eliminar un usuriario");


module.exports = route;