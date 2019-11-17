const express = require('express')
const router = express.Router()

const quoteCtrl = require('../controllers/quote')

router.get('/random', quoteCtrl.getRandomQuote)

module.exports = router