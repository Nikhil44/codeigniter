const express = require('express');

var app = express();

// setup of static dir
app.use(express.static(__dirname+ '/public'));

app.get('/', (req,res) =>  {
    res.send({name: "nikhil"});
});

app.get('/about', (req,res) =>  {
    res.send({name: "nikhil"});
});

//bad -send nack json with error ,message
app.get('/bad', (req,res) =>  {
    res.send({errorMessage: "unable to handal resquest"});
});

app.listen(3000,() => {
  console.log("server is up");
});
