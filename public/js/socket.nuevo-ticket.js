//Establecer la comunciacion
var socket = io();
var label = $('#lblNuevoTicket');
socket.on('connect', function() {
  console.log('Conectado.');
});

socket.on('disconnect', function() {
  console.log('Desconectado');
});
socket.on('estadoActual', function( resp) {
  console.log(resp);
  label.text(resp.actual);
})

$('button').on('click', function () {
  socket.emit('siguienteTicket', null, function(siguienteTicket){
    label.text(siguienteTicket);
  });

});
