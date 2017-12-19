var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createEmail', {
    to: 'kaipl@example.com',
    text: 'Hey. This is Kapil.'
  });


  socket.emit('createMessage', {
  from: 'kapil',
  text: 'Yup, that works for me.'
});


});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newEmail', function (email) {
  console.log('New email', email);
});


socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
