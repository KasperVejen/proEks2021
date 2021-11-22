const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT = 7070;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

app.listen(process.env.PORT || 7070)
