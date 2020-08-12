const mongoose = require('mongoose');

mongoose.connect(process.env.CUSTOMCONNSTR_MyConnectionString,{ useNewUrlParser: true })
.then(db => console.log("DB is connected"));

module.exports = mongoose;