const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const port = 3000;

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

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});