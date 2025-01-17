const express = require("express")
const PostController = require("../controllers/PostController")
const { authentication, isAuthor } = require("../middlewares/authentication")
const router = express.Router()

router.post("/create",authentication,PostController.create)
router.put("/id/:_id",authentication,isAuthor,PostController.update)
router.delete("/id/:_id",authentication,isAuthor,PostController.delete)
router.get("/title/:title",PostController.getByTitle)
router.get("/id/:_id",PostController.getById)
router.get("/getAll",PostController.getAll)
router.put("/like/:_id",authentication,PostController.like)
router.put("/unlike/:_id",authentication,PostController.unlike)
router.post("/addComment/:_id",authentication,PostController.addComment)


module.exports = router