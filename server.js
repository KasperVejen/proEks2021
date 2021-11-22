// video project setup - node.js/express/Mongodb course 1 tid: 16:00
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

//extentions //
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')
const app = express();

//connection med database ved MongoDB//
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
     useNewUrlParser: true
});
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Der er forbindelse til Mongoose'))
//connection med database ved MongoDB//
//extentions //

//Router//
const indexRouter = require('./routes/index')
const brugereRouter = require('./routes/brugere')
//Router//

//app instillinger//
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false}));

app.use('/', indexRouter)
app.use('/brugere', brugereRouter)

app.listen(process.env.PORT || 7070)
//app instillinger//

