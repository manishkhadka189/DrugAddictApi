require('./database/mongoos')

const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));

app.use('/api', require('./routes/api'));
app.use('/public', express.static(__dirname + '/public'));
app.use('/api/auth', require('./routes/auth'));


app.use(function(err, req, res, next) {
    res.status(422).send({
        error : err.messaage
    })
})
app.listen(3400);