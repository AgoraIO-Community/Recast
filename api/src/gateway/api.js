// api methods

const mds = require('../methods/index.js');

const express = require('express');
const router = express.Router();

router.get('/', mds.apiRoot);

module.exports = router;