/* npm install --save express */
/* moment js for dates */
const express = require('express');
const { response } = require('express');
require('dotenv').config();
const Twitter = require('./api/helpers/twitter');
const twitter = new Twitter();
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

const port = 3000;
app.get('/tweets', (req, res) => {

    const query = req.query.q;
    const count = req.query.count;
    const maxId = req.query.max_id;

    twitter.get(query, count, maxId).then((response) => {
        res.status(200).send(response.data);
    }).catch((error) => {
        res.status(400).send(error)
    })


});














app.listen(port, () => {
    console.log('listening on port', port);

});

