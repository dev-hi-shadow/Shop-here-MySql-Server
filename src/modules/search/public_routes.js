const { Search } = require("./controller")

const router =require("express").Router()

router.route("/:keyword").get(Search)

module.exports = router