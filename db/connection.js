const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //SQL username
        user: 'root',
        password: 'Ant19Chum94!', //placeholder
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;