const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

connection.connect((err) => {
    if(err) throw err;
    console.log("SEI CONNESSO AL DATABASE, ORA SEI FOTTUTO!");
})

module.exports = connection;