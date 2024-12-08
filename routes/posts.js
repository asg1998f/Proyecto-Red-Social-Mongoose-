const express = require("express")
const PostController = require("../controllers/PostController")
const router = express.Router()

router.post("/create",PostController.create)
router.put("/id/:_id",PostController.update)
router.delete("/id/:_id",PostController.delete)

module.exports = router