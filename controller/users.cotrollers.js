const { pool } = require("../config/db/database.js");

const findAll = async (req,res) => {
    const sql = "SELECT * FROM users"; 
    try {
        const result = await pool.query(sql);
        // console.log(result.rows);
        res.send(result.rows);
    } catch (error) {
        console.error("error al mostrar los datos", error);
    }
}
  
  module.exports = { findAll };