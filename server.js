const express = require('express');
const app = express();


const PORT = process.env.PORT || 4001;
const quoteRouter = require('./Router/quote')

app.use(express.static('public'));

app.use('/api/quotes', quoteRouter)

app.listen(PORT, ()=>{
    console.log(`Server connected on port: ${PORT}`)
})

