require('./server/config/config');
require('./server/config/passportConfig');

const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require("cors");
const {mongoose} = require('./server/database');
const path = require('path');
const passport = require('passport');

//Settings
app.set('port', process.env.PORT || 3000);

//Middelware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(passport.initialize());

//Routes
app.use('/api',require('./server/routes/images.routes'));
app.use('/api',require('./server/routes/file.routes'));
app.use('/api',require('./server/routes/user.routes'));

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
app.listen(app.get('port'));