const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 7000;
const path = require('path');
const bodyParser = require('body-parser');
const ejsMate = require('ejs-mate');
const methodOverRide = require('method-override');
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/LibManageDB', {
    
})
    .then(() => {
        console.log('DB Connected!');
    })
    .catch((e) => {
        console.log(e);
    });

app.get('/', (req, res) => {
    console.log("GET / route hit");
    res.send('Working Fine!');
});

const bookRoutes = require('./routes/bookRoutes');
app.use(bookRoutes);
app.use(methodOverRide('_method'));

app.listen(PORT, () => {
    console.log('Server Started at PORT:', PORT);
});
