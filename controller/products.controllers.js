// const { pool } = require("../config/db/database.js");

// const insert = async (req,res)=>{
//     // res.send("insertando un dato")
//     const producto = req.body.producto;
//     const imagen = req.body.imagen;
//     const descripcion = req.body.descripcion;
//     const precio = req.body.precio;
//     const estado = req.body.estado;
    
//     try {
//         const result = pool.query(`INSERT INTO PRODUCTOS  (PRODUCTO, IMAGEN, DESCRIPCION, PRECIO, ESTADO) VALUES('${producto}','${imagen}','${descripcion}',${precio}, ${estado})`)
        
//         res.send(result)

//     } catch (error) {
//         console.error ("error al insertar");

//     }
// }

// const findAll = async (req,res) => {
//     const sql = "SELECT * FROM PRODUCTOS"; 
//     try {
//         const result = pool.query(sql,(error,datos,campos)=>{
//         console.log(datos);
//         res.send(datos);
//         });
//     } catch (error) {
//         console.error ("error al mostrar los datos")

//     }

// }

// const find = (req,res) => {
//     const id =req.params.id
//     const sql = pool.query(`SELECT * FROM PRODUCTOS WHERE ID = ${id}` )
//     try {
//         const result = pool.query(sql,(error,datos,campos)=>{
//             console.log(datos);
//             res.send(datos)
//         });
        
//         // res.send(result)
//         // console.log (rows);

//     } catch (error) {
//         console.error ("error al mostrar los datos");

//     }
// }

// const update = (req,res) => {
//     const id = req.body.id
//     const producto = req.body.producto;
//     const imagen = req.body.imagen;
//     const descripcion = req.body.descripcion; 
//     const precio = req.body.precio;
//     const estado = req.body.estado;
    
//     res.send(producto+','+imagen+','+descripcion+','+precio+','+estado+','+id);
//     // res.send("actualizar un dato")
//     try {
//         const sql = `UPDATE PRODUCTOS 
//         SET PRODUCTO = '${producto}',
//         IMAGEN = '${imagen}',
//         DESCRIPCION = '${descripcion}',  
//         PRECIO =${precio},
//         ESTADO=${estado} 
//         WHERE ID = ${id};`  
    
//         const result = pool.query(sql); 
//     } catch (error) {
//         console.error("hay un error al actualizar el registro"); 
//     }
// }


// const delet = (req,res) => {
    
  
//   const id = req.params.id;
//     const sql = `DELETE FROM PRODUCTOS 
//     WHERE ID = ${id};`;

//     try {
//         const result = pool.query(sql);

//     } catch (error) {
//         console.error("error al eliminar ")
//     }

//     res.json({"dato":"borar un dato "+id})

// }


// // export default insert 
// module.exports = {insert, find, update, delet, findAll};