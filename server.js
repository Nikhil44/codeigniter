const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();

// setup of static dir
app.set('view engine','hbs');
app.use((req,res,next) =>
{
  var now = new Date().toString();
  console.log(`${now}: ${req.method} ${req.url}`);
  next();
})


app.use(express.static(__dirname+ '/public'));


app.use((req,res,next) =>
{
   res.render('maintenance.hbs',{errorTitle: 'we will be back '})
})


hbs.registerPartials(__dirname + '/views/partials');


hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIT',(text) => {
  return text.toUpperCase();
})


app.get('/', (req,res) =>  {
  res.render('home.hbs',
  { pageTitle: 'home Page',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/about', (req,res) =>  {
    res.render('about.hbs',
    {
      pageTitle: 'About Page'
    });
});

//bad -send nack json with error ,message
app.get('/bad', (req,res) =>  {
    res.send({errorMessage: "unable to handal resquest"});
});




app.listen(port,() => {
  console.log("server is up");
});
