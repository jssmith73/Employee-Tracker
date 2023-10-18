const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3003;
app = express();


//MIDDLEWARE

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const db = mysql.createConnection(
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

app.listen(PORT, () => {
    console.log('Server is running.')
});
