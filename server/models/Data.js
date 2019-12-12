const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DataSchema = new Schema({
    user: {
        type: String,
        default: ""
    },
    chat: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Data = mongoose.model("data", DataSchema);