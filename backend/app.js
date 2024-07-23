'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// CARGAR ARCHIVOS DE RUTAS

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS

// RUTAS
app.post('/test', (req,res) => {

    console.log(req.body.nombre);
    console.log(req.query.nombre);

    res.status(200).send({
        message: "Hola mundo desde mi api de node.js" + req.query.nombre
    });

});

app.get('/', (req,res) => {
    res.status(200).send("pagina de inicio");
});

// EXPORTAR
module.exports = app;
