

///
router.put("/collections/:collectionId/:id", (req, res) => {
    if(req.body.completed === "on") {
        req.body.completed = "true"
    } else {
        req.body.completed = false
    }
    Piece.findByIdAndUpdate({ _id: req.params.id})
    .populate("collections").exec((err, piece) => {
        res.render("show-collection.ejs", {
            piece: piece,
            title: "Collection" 
        });
    });
});