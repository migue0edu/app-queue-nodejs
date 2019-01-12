var socket = io();

var searchParams = new URLSearchParams(window.location.search);
if(!searchParams.has('escritorio')){
  window.location = 'index.html';
  throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
$('h1').text('Escritorio' + escritorio);

$('button').on('click', function() {
  socket.emit('atenderTicket', {escritorio: escritorio}, function(resp) {
    console.log(resp);
    if( resp === 'No hay mas tickets'){
      $('small').text('Resp');
      alet(resp);
      return;
    }
    $('small').text('Ticket' + resp.numero);
  });
});
