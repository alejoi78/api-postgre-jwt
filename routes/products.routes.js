const {Router} = require("express");
const { insert,update,delet,find, findAll } = require("../controller/products.controllers")

const route = Router();
// mostrar
route.get("/product/:id", find);
route.get("/product", findAll);
// Insertar
route.post("/product", insert);
// actualizar
route.put("/product", update);
// eliminar
route.delete("/product/:id", delet);
module.exports = route;