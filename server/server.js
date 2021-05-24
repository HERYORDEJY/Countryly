const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const connectionString =
  'mongodb+srv://mtahir:mtsulaiman@mtahir.rtmj6.mongodb.net/mtahir?retryWrites=true&w=majority';

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    console.log('Connected to Database');
    const db = client.db('mtahir');
    const collection = db.collection('articles');
    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: true }));
    // app.set('view engine', 'ejs');
    // app.get('/articles', (req, res) => {
    //   const cursor = db.collection('articles').find();
    //   console.log(cursor);
    // });
    // app.get('/articles', (request, response) => {
    //   collection.find({}).toArray((error, result) => {
    //     if (error) {
    //       return response.status(500).send(error);
    //     }
    //     response.send(result);
    //   });
    // });
    // app.post('/articles', (req, res) => {
    //   quotesCollection
    //     .insertOne(req.body)
    //     .then((result) => {
    //       console.log(result);
    //     })
    //     .catch((error) => console.error(error));
    // });
    app.listen(3000, function () {
      console.log('listening on 3000');
    });
  })
  .catch((error) => console.error(error));
