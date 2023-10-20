const express = require('express');

const PORT = process.env.PORT || 3003;
app = express();


//MIDDLEWARE

app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.listen(PORT, () => {
    console.log('Server is running.')
});