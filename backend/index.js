'use strict'

var mongoose = require("mongoose");
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/portafolio")
.then(()=>{
    console.log("conexion a base de datos exitosa");

    // creacion del servidor
    app.listen(port, () => {
        console.log("servidor correindo correctamente en localhost:3700");
    });

})
.catch(err => console.log("error: "+err));