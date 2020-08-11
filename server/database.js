const mongoose = require('mongoose');

mongoose.connect(process.env.MyConnectionString, { useMongoClient: true })
    .then(db => console.log("DB is connected"));

module.exports = mongoose;