const mongoose = require('mongoose').MongoClient;

mongoose.connect(process.env.MyConnectionString || process.env.MONGODB_URI, function (err, db) {
    db.close();
});

module.exports = mongoose;