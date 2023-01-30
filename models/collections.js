const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    img: { type: String, required: true },
    pieces: [{ type: Schema.Types.ObjectId, ref: "Piece"}],
});

module.exports = mongoose.model("Collection", collectionSchema);