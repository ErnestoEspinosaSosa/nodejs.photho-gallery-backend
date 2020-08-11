const mongoose = require('mongoose').MongoClient;

mongoose.connect('mongodb://cosmosdbmeanstack:o1BTWdJyokdRb4EvVEkbpEnyWLVjXxQBo4SJBGKalV2grwgyHFOs449eZpUswTmzKecrzwJHKQQFfbBJHm8mIw==@cosmosdbmeanstack.mongo.cosmos.azure.com:10255/?ssl=true&appName=@cosmosdbmeanstack@', function (err, db) {
    db.close();
});

module.exports = mongoose;