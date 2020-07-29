const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const movements = require('./movments');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (req, res) => {
    res.json({
        info: 'Chess API running on 3000'
    })
});

app.post('/movement', movements.getPossibleKnightMovments);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});