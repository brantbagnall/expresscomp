require("dotenv").config();
const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    massive = require('massive'),
    ctrl = require('./controllers');

const app = express();

app.use(bodyParser.json());

app.use(cors());

massive(process.env.MASSIVE_CONNECTION).then(db =>{
    app.set('db', db)
})