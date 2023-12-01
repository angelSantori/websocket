var express = require('express');
var app = express();


/* Como trabajaremos con socket, es recomendable usar el modulo HTTP para pasarle la app a express y manejar bien http */
var server = require('http').Server(app);

/**
 * Aqui estara toda la funcionalidad de los socket 
 * Se requiere la libreria socket.io 
 * se para la variable server que tiene la app express y http
 */
var io = require('socket.io')(server);

app.get('/', function(req, res){
    res.status(200).send("Hola mundo");
});

server.listen(3005, function(){
    console.log("El servidor esta corriendo en http://localhost:3005");
});

