const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const ChildrenSchema = mongoose.Schema({
    name: String,
});

const CatSchema = mongoose.Schema({
    name: String,
    rating: Number,
    children: [ChildrenSchema]
});
CatSchema.plugin(timestamps);
CatSchema.virtual('nameLength').get( function () {
    // console.log('Hi!');
    return this.name.length;
});

module.exports = mongoose.model('Cat', CatSchema);