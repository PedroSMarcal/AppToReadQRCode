// Here it's where the server starts, it's very simple just open the dors, and import the routes from my controllers;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false } ));

require('./controllers/authController')(app);

app.listen(3333);