const express = require("express")
const router = express.Router()
const controller = require("../controlers/nomesControlers")

router.get("/", controller.getAll)

module.exports = router
