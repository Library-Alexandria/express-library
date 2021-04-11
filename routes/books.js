const express = require("express")
const router = express.Router()
const models = require("../models")

//get route for books:id
router.get("/:author", async (req, res) => {
    try {
        const foundBooks = await models.book.findAll({
            where: {
                author: req.params.author
            }
        })
        res.status(200).json({ books: foundBooks })
    } catch (error) {
        res.status(400).json({ msg: error })
    }

})

//get route for books:query
module.exports = router