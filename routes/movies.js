var express = require('express');
var data = require('../data/db.js');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.json({
    status: true,
    statusCode: 100,
    data
  }).status(200)
});

router.get('/:id', function(req, res, next) {
  const { id } = req.params
  console.log(req.params)
  res.json({
    status: true,
    statusCode: 100,
    data: data.find(item => item.rank === parseInt(id))
  }).status(200)
});

module.exports = router;
