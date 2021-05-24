var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

// var db = mongojs(
//   'mongoexport --uri mongodb+srv://mtahir:mtsulaiman@mtahir.rtmj6.mongodb.net/mtahir --collection articles --type json --out articles',
// );

router.get('/articles', function (req, res) {
  var db = req.db;
  var collection = db.get('mtahir');
  collection.find({}, {}, function (e, docs) {
    res.render('articles', {
      articles: docs,
    });
  });
});

// router.get('/articles', (request, response) => {
//   collection.find({}).toArray((error, result) => {
//     if (error) {
//       return response.status(500).send(error);
//     }
//     response.send(result);
//   });
// });

// router.get('/', function (req, res, next) {
//   res.send('...the articles herer');
// });

module.exports = router;
