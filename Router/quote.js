const express = require('express')
const router = express.Router()

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');



module.exports = router