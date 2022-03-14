const express = require("express")

const router = express()


router.get('/home', (req, res) => {
    res.json(
        { "title": "hola mundo" }
    )
})

module.exports = router