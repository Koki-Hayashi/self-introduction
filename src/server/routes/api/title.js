const express = require('express');
const router = express.Router();

let title = 'home page';

router.get('/', function(req, res) {
  res.send(title);
});

router.post('/', function(req, res) {
  title = req.body.title;
  res.send(title);
});

module.exports = router;
