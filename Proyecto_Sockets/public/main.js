/* Creamos la variable que permitira al frontend conectarse a nuestro backend */
var socket = io.connect('http://localhost:3005', {'forceNew': true});

/* Esto manda al servidor el mensaje de connect y aparece en console.log */

/* EL cleinte manejara datos mediante mensajes, esto se llamaran eventos y se mostraran por consola en el navegador */
socket.on('messages', function(data){
    console.log(data);
    render(data);
});

/* Creamos un template para que nos imprima el contendi */
function render(data){
    //Aqui se inicia el manejo de string que viene en EM6 se usan estas coillas ``
    //Las variables se colocan con el signo de $ y entre {}

    var html = `<div> 
                    <strong>${data.autor}</strong>:
                    <em>${data.texto}</em>
                </div>`;
                
                document.getElementById('messages').innerHTML = html;
}