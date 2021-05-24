// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
// const config = require('config');
// const dotEnv = require('dotenv');
// const morgan = require('morgan');
// const ObjectId = require('mongodb').ObjectID;
// const CONNECTION_URL =
//   'mongodb+srv://mtahir:mtsulaiman@mtahir.rtmj6.mongodb.net/mtahir?retryWrites=true&w=majority';
// const DATABASE_NAME = 'mtahir';

// const app = express();
// /* bodyParser Middleware */
// // app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// /* Load Env */
// // dotEnv.config({ path: './config.env' });

// /* Connect DB */
// // const db = config.get('mongoURI');
// // mongoose
// //   .connect(db, {
// //     useNewUrlParser: true,
// //     useCreateIndex: true,
// //     useUnifiedTopology: true,
// //     useFindAndModify: false,
// //   })
// //   .then(() => console.log('MongoDB is connected'))
// //   .catch((err) => console.log(err));

// /* Route actions */
// // app.use('/', '../routes/index');
// // app.use('/articles', require('./routes/articles'));

// // if (process.env.NODE_ENV === 'development') {
// //   app.use(morgan('dev'));
// // }

// // const port = process.env.PORT || 3000;

// // app.listen(3000, () => {
// //   console.log('port 3000 connected');
// // });

// let database, collection;

// app.listen(3000, () => {
//   console.log('port 3000 connected');
//   MongoClient.connect(
//     CONNECTION_URL,
//     { useNewUrlParser: true },
//     (error, client) => {
//       if (error) {
//         throw error;
//       }
//       database = client.db(DATABASE_NAME);
//       collection = database.collection('articles');
//       console.log('Connected to `' + DATABASE_NAME + '`!');
//     },
//   );
// });

// // const indexRouter = require('./routes/index');
// // const articlesRouter = require('./routes/articles');

// // app.use('/', indexRouter);
// // app.use('/users', articlesRouter);

// app.get('/articles', (request, response) => {
//   collection.find({}).toArray((error, result) => {
//     if (error) {
//       return response.status(500).send(error);
//     }
//     response.send(result);
//   });
// });

// ====================================================================

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
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.set('view engine', 'ejs');
    // app.get('/articles', (req, res) => {
    //   const cursor = db.collection('articles').find();
    //   console.log(cursor);
    // });
    app.get('/articles', (request, response) => {
      collection.find({}).toArray((error, result) => {
        if (error) {
          return response.status(500).send(error);
        }
        response.send(result);
      });
    });
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
