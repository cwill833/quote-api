const express = require('express')
const router = express.Router()

const quoteCtrl = require('../controllers/quote')

router.get('/random', quoteCtrl.getRandomQuote)
router.get('/', quoteCtrl.getAllOrOne)
router.post('/', quoteCtrl.add)

module.exports = router