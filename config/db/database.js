const dotenv = require("dotenv")
const {createPool} = require("mysql2/promise");

dotenv.config(); 


const pool = createPool({
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
host: process.env.DB_HOST,
port: process.env.DB_PORT,
database: process.env.DB_DATABASE,
});

module.exports = pool;