$(document).ready(function(){
    var socket = io.connect('ws://' + document.domain + ':' + location.port + '/test');

    socket.on('my response', function(msg) {
        $('#log').prepend('<p>Received: ' + msg.data + '</p>');
    });

    $('form#emit').submit(function(event) {
        socket.emit('my broadcast event', {data: $('#emit_data').val()});
        return false;
    });
});
