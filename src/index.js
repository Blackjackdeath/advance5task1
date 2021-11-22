const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const routing = require('./app/routs/index.js');
const config = require('./config/app');

const app = express();

app.listen(3500, ()=>{
    console.log('listen port 3500');
});

app.use(bodyParser.json());
app.use('/api', routing());

const connection=mysql.createConnection(config);

connection.connect(error=>{
    if (error){
        console.log(error);
        return error;
    }
    else{
        console.log('connected');
    }
});




