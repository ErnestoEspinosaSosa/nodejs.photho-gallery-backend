const mongoose = require('mongoose');

mongoose.connect(process.env.CUSTOMCONNSTR_MyConnectionString || process.env.MONGODB_URI, function (err, db) {
    db.close();
});
.then(db => console.log("DB is connected"))
.catch(err => console.log(err));

module.exports = mongoose;