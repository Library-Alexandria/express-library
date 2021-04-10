const express = require("express");
const router = express.Router();
const db = require("../models");
const user = require("../models/user");

router.post("/post", async(req, res) => {
    const book = await User.create({ 
        id:1,
        name:"Necronomicon",
        author:"???",
        subject:"Monsters",
        description:"???",
        image:"???",
        text:"???"
    })

})

router.get("/:author", async (req, res) => {
    db.findAll({
        where: {
            author: req.params.author
        }
    }).then((books) => {
        res.send(books)
        console.log(books)
    }).catch((err) => res.send(err))

})

module.exports = router;