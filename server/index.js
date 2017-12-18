require("dotenv").config();
const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    massive = require('massive'),
    ctrl = require('./controllers');

// COMP 74C
const app = express();

// COMP 76F
app.use(bodyParser.json());

app.use(cors());

// COMP 70C
massive(process.env.MASSIVE_CONNECTION).then(db =>{
    app.set('db', db)
})

// COMP 74D-1 and COMP 76C
app.get('/getAll', ctrl.getAll)

// COMP 74D-3
app.post('/postname', ctrl.postName)

app.post('/createtable', ctrl.createTable)

app.put('/edit/:id/')

const port = 3030

app.listen(port, ()=> console.log('Listening on port: ' + port))