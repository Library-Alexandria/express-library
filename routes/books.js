const express = require("express");
const router = express.Router();
const models = require("../models");
// const user = require("../models/user");

//get route for books:id

router.get("/:author", async (req, res) => {
    
    models.book.findAll({
        where: {
            author: req.params.author
        }
    }).then((found_books) => {
        res.status(200).json(found_books)
        // console.log(found_books)
    }).catch((err) => res.status(400).json({error: err}))

})


//get route for books:query

module.exports = router;