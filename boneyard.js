// original show route
Collection.findById(req.params.id, (err, foundCollection) => {
    res.render("show-collection.ejs", {
        collection: foundCollection,
        title: "Collection"
    })
})

// tried this for hours 
router.get("/collections/:id", (req, res) => {    
    Collection.findById({ _id: req.params.id })
    .populate("pieces").exec((err, Collection) => {
        res.render("show-collection.ejs", {
            collection: req.params.id,
            piece: req.piece,
            title: "Collection"
        });
    }); 
});
