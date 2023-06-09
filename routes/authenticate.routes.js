const { Router } = require('express');
const route = Router();
const jwt = require('jsonwebtoken');
const { auth } = require('../controller/authenticate');

// Ruta protegida que requiere autenticación
route.get('/userauth', authenticateToken, (req, res) => {
  // La función authenticateToken se ejecutará primero para verificar el token JWT

  // Obtener los datos del usuario...
  const userId = req.userId;
  const userData = getUserDataFromDatabase(userId);

  // Devolver los datos del usuario como respuesta...
  res.send(userData);
});

// Función para verificar el token JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, 'SdfsdSAFHSEe5kAAWEefasE', (err, payload) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.userId = payload.userId;
    next();
  });
}

route.post("/authenticate", auth);

module.exports = route;