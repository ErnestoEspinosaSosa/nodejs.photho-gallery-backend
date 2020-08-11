const mongoose = require('mongoose');

mongoose.connect(process.env.MyConnectionString || process.env.MONGODB_URI, function (err, db) {
    db.close();
});

module.exports = mongoose;