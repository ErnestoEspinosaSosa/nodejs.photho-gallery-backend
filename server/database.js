const mongoose = require('mongoose');

mongoose.connect('mongodb://cosmosdbmeanstack:o1BTWdJyokdRb4EvVEkbpEnyWLVjXxQBo4SJBGKalV2grwgyHFOs449eZpUswTmzKecrzwJHKQQFfbBJHm8mIw==@cosmosdbmeanstack.mongo.cosmos.azure.com:10255/?ssl=true&appName=@cosmosdbmeanstack@',
{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
.then(db => console.log("DB is connected"));

module.exports = mongoose;