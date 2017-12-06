//const MongoClient = require('mongodb').MongoClient;

//Destructuring assignment

const {MongoClient, ObjectID} = require('mongodb');
console.log(new ObjectID());
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.close();
});
