const Post = require("../models/Post");

const PostContoller = {
    async create(req,res){
        try {
            const post = await Post.create(req.body)
            res.status(201).send({message:"New post successfully created",post})
        } catch (error) {
            res.status(500).send({message:"There was a problem"})    
        }
    },
}

module.exports = PostController