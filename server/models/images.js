const mongoose = require('mongoose');
const {Schema} = mongoose;

const ImageSchema = new Schema({
    title: { type: String, required: true},
    name: { type: String, required: true},
    guidName: {type: String, required: true}
});

module.exports = mongoose.model('Image', ImageSchema);