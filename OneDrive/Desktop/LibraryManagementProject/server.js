const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();
const PORT = 7000;

app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: true,
}));

app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

mongoose.connect('mongodb://localhost:27017/LibManageDB', {
    
})
    .then(() => {
        console.log('DB Connected!');
    })
    .catch((e) => {
        console.log(e);
    });

app.get('/', (req, res) => {
    res.send('Working Fine!');
});

const bookRoutes = require('./routes/bookRoutes');
app.use(bookRoutes);

app.listen(PORT, () => {
    console.log('Server Started at PORT:', PORT);
});
