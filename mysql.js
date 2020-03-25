const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "petshop"
});
 
connection.query(
    'SELECT * FROM cliente', (err, result, fields) => {
        console.log(fields);
        console.log(result);
    }
);