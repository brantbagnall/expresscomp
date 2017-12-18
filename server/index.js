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
app.get('/getAll', ctrl.getAll);

// COMP 74D-3
app.post('/postname', ctrl.postName);

app.post('/createtable', ctrl.createTable);

// COMP 74D-2
app.put('/edit/:id', ctrl.editById);

app.get('/name', ctrl.searchByFirstName);

// COMP 74D-4
app.delete('/delete/:id', ctrl.deleteById)

const port = 3030;

app.listen(port, ()=> console.log('Listening on port: ' + port))

// COMP 69B
// Datatypes affect how fast your database is as well as how big it is. One instance of setting a good datatype is varchar for a first name or last name and setting it to something small like a varchar(30) so your database cannot be killed by useless text.