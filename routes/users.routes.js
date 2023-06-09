const {Router} = require("express");
const { findAll } = require("../controller/users.cotrollers")

const route = Router();

route.get("/user", findAll)

module.exports = route;