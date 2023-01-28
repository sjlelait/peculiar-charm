const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pieceSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    img: { type: String, required: true }
});
module.exports = mongoose.model("Piece", pieceSchema);