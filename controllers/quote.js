const { quotes } = require('../data');
const { getRandomElement } = require('../utils');

module.exports = {
    getRandomQuote,
    getAllOrOne,
    add
}

function getRandomQuote(req, res){
    const randoQuote = getRandomElement(quotes)

    res.send({quote: randoQuote})
}

function getAllOrOne(req, res){
    if (Object.keys(req.query).length === 0){
        res.send({quotes})
    }
    
    const filtered = quotes.filter(e=>{
        if (e.person === req.query.person) return e
    })

    res.send({quotes: filtered})

}

function add(req, res){
    if(req.query.quote && req.query.person){
        let data = {quote: req.query.quote, person: req.query.person}
        quotes.push(data)
        res.send({quote: data})
    }

    res.status(400).send()
}