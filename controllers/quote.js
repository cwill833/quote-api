const { quotes } = require('../data');
const { getRandomElement } = require('../utils');

module.exports = {
    getRandomQuote
}

function getRandomQuote(req, res){
    const randoQuote = getRandomElement(quotes)

    res.send({quote: randoQuote})
}