const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

//connection med database med MongoDB//
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
     useNewUrlParser: true
});
const db = mongoose.connect
db.on('error', error => console.error(error))
db.once('open', () => console.log('Der er forbindelse til Mongoose'))

//connection med database med MongoDB//


const indexRouter = require('./routes/index')


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

app.use('/', indexRouter)

app.listen(process.env.PORT || 7070)


