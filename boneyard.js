
// show page not using
router.get("/collections/:collectionId/:id", (req, res) => {    
    Piece.findById({ _id: req.params.id })
    .populate("collection").exec((err, piece) => {
        res.render("show-collection.ejs", {
            Piece: piece,
            title: "Collection"
        });
    }); 
});