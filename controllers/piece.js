const express = require("express");
const router = express.Router();
const Piece = require("../models/pieces");
const Collection = require("../models/collections");
  
  
// SEED 

// INDEX

// NEW
router.get("/pieces/new", (req, res) => {
    res.render("new-piece.ejs", {
        title: "New Piece"
    });
});
// DELETE

// UPDATE

// CREATE
router.post("/pieces", (req, res) => {
    if(req.body.completed === "on") {
        req.body.completed = "true"
    } else {
        req.body.completed = false
    }
    Piece.create(req.body, (err, createdPiece) => {
        res.send(createdPiece)
    });
});
// EDIT

// SHOW

module.exports = router;