
const { pool } = require("../config/db/database.js");

const insert = async (req,res)=>{
    // res.send("insertando un dato")
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const sexo = req.body.sexo;

    try {
        const result = pool.query(`INSERT INTO USERS (NOMBRE, EDAD, SEXO ) VALUES('${nombre}',${edad}, '${sexo}')`)
        
        res.send(result)

    } catch (error) {
        console.error ("error al insertar");

    }
}

const findAll = (req,res) => {
    try {
        const rows = pool.query("SELECT * FROM USERS" )


    } catch (error) {
        console.error ("No mostró nada " +error);

    }

    res.send(result)
}
const find = (req,res) => {
    res.send("Buscar un dato")
}

const update = (req,res) => {
    const id = req.body.id
    const nombre = req.body.nombre; 
    const edad = req.body.edad;
    const sexo = req.body.sexo;
    
    res.send(nombre+','+edad+','+sexo+','+id);
    // res.send("actualizar un dato")
    try {
        const sql = `UPDATE USERS 
        SET NOMBRE = '${nombre}',  
        EDAD =${edad},
        SEXO='${sexo}' 
        WHERE ID = ${id};`  
    
        const result = pool.query(sql); 
    } catch (error) {
        console.error("hay un error al actualizar el registro"); 
    }
}


const delet = (req,res) => {
    
  
  const id = req.params.id;
    const sql = `DELETE FROM USERS 
    WHERE ID = ${id};`;
     
  res.send("borar un dato "+id)

    try {
        const result = pool.query(sql);

    } catch (error) {
        console.error("error al eliminar ")
    }

}


// export default insert 
module.exports = {insert, find, update, delet, findAll};