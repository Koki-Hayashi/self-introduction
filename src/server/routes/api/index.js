const express = require('express');
const router = express.Router();

const title = require('./title');

router.use('/title', title);

module.exports = router;
