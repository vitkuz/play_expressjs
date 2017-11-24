const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const Schema = mongoose.Schema({
    name: String,
    text: String,
    articles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    }],
});
Schema.plugin(timestamps);

module.exports = mongoose.model('Quote', Schema);