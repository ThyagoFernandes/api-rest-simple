var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RPGSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    Developer: {
        type: String,
        required: true
    },
    Release_year: String,
    Series: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model("rpgs",RPGSchema);