const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static('static'));

require('./controllers')(app);

const port = process.env.PORT || 4444;

app.listen(port, () =>
    console.log(`App is listening on port ${port}.`)
);