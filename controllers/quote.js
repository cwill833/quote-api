const { quotes } = require('../data');
const { getRandomElement } = require('../utils');

module.exports = {
    getRandomQuote,
    getAll
}

function getRandomQuote(req, res){
    const randoQuote = getRandomElement(quotes)

    res.send({quote: randoQuote})
}

function getAll(req, res){
    if (Object.keys(req.query).length === 0){
        console.log("empty")
        res.send({quotes})
    }

    

}