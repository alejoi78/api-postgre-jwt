const { pool } = require("../config/db/database.js");

const auth = async (req, res) => {
 
  const email = req.body.email;
  const password = req.body.password;

  if(!email) {
     return res.status(400).send('El email es requerido');
  }  
    
  if(!password) {
     return res.status(400).send('La contraseña es requerida');
  }
  
    try {
      // Buscar el usuario en la base de datos...
      const result = await pool.query("SELECT * FROM users WHERE email = $1 AND password = $2", [email, password]);
      const user = result.rows[0];
  
      if (user) {
        // Las credenciales son válidas, generar un token JWT...
        const payload = { userId: user.id };
        const secretKey = 'SdfsdSAFHSEe5kAAWEefasE';
        const token = jwt.sign(payload, secretKey);
        res.send({ token });
      } else {
        // Las credenciales son inválidas, devolver un error de autenticación...
        res.status(401).send({ error: 'Credenciales inválidas' });
      }
    } catch (err) {
      // Error al buscar el usuario en la base de datos...
      res.status(500).send({ error: 'Error en la base de datos' });
    }
  }
  
  module.exports = { auth };