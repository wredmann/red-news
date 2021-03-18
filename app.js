const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');

const app = express();
const port = process.env.PORT || 5550;

app.locals.moment = moment;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes/news'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, () => console.log('server started'))