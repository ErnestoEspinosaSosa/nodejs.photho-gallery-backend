require('./config/config');
require('./config/passportConfig');

const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require("cors");
const {mongoose} = require('./database');
const path = require('path');
const passport = require('passport');

//Settings
app.set('port', process.env.PORT);

//Middelware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(passport.initialize());

//Routes
app.use('/api',require('./routes/images.routes'));
app.use('/api',require('./routes/file.routes'));
app.use('/api',require('./routes/user.routes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

// error handler
app.use((err, req, res) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port ' + process.env.PORT)
});