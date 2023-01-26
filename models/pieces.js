const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pieceSchema = new Schemma({
    collectionId: String,
    name: String,
    description: String,
    img: String
});
module.exports = mongoose.model("Piece", pieceSchema);