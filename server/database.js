const mongoose = require('mongoose').MongoClient;

mongoose.connect(process.env.CUSTOMCONNSTR_MyConnectionString || process.env.MONGODB_URI, function (err, db) {
    db.close();
});

module.exports = mongoose;