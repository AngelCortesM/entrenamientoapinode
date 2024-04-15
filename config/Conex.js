const mysql = require('mysql');
const conex = mysql.createConnection({
    host: '127.0.0.1',
    port: '3307',
    user: 'root',
    password: '',
    database: 'proyectonode'
});

conex.connect((error) => {
    if (error) {
        console.error("Error de conexion en Mysql => paso esto:" + error);
        return;
    }
    console.log("La conexion fue exitosa");
});

module.exports = conex;