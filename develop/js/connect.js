const mysql = require('mysql2');


const server = mysql.createConnection(
    {
        host:'localhost',
        //username
        user: 'root',
        //password
        password: 'JohnWick1394**',
        database: 'my_company'
    },
    console.log('Connected to my_company')
);

//Exports to queries
module.exports = server;