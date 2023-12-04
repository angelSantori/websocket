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

/* Usamos un middleware para usar elementos estaticos en la sección pública de la aplicación */
app.use(express.static('../public'));

app.get('/', function(req, res){
    res.status(200).send("Hola mundo");
});


/* De esta forma activamos socket para que este escuchando mandamos un mensaje de control por consola para saber que pasa y tenemos que hacer que el mensaje venga del navegador web mediante html JS */
io.on('connection', function(socket){
    console.log('Alguien se ha conectado con socket');

    /* Aqui controlamos los eventos del cliente mediante sockets */
    socket.emit('messages', {
        id: 1,
        texto: "Hola soy un mensaje",
        autor: "Manuel Antonio Campa Martínez"
    });
});

server.listen(3005, function(){
    console.log("El servidor esta corriendo en http://localhost:3005");
});

