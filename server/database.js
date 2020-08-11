const mongoose = require('mongoose');

mongoose.connect(process.env.CUSTOMCONNSTR_MyConnectionString, { useMongoClient: true })
.then(db => console.log("DB is connected"))
.catch(err => console.log(err));

module.exports = mongoose;