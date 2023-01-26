const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    name: String,
    description: String,
    img: String
});
module.exports = mongoose.model("Collection", collectionSchema);