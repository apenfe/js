'use strict'

var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/portafolio")
.then(()=>{
    console.log("conexion a base de datos exitosa");
})
.catch(err => console.log("error: "+err));