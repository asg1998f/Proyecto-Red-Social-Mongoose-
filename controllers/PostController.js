const Post = require("../models/Post");



const PostController = {
    async create(req,res){
        try {
            const post = await Post.create(req.body)
            res.status(201).send({message:"New post successfully created",post})
        } catch (error) {
            res.status(500).send({message:"There was a problem"})    
        }
    },
    async update(req, res) {
        try {
          const post = await Post.findByIdAndUpdate(
            req.params._id, 
            req.body,
            { new: true }
        )
          res.send({ message: "Post successfully updated", post });
        } catch (error) {
          console.error(error);
        }
      },
      async delete(req, res) { 
        try {
            const post = await Post.findByIdAndDelete(req.params._id)
            res.send({ message: 'Post deleted', post })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'There was a problem trying to remove the post'})
        }
    },
    async getByTitle(req, res) {
        try {
          const title = new RegExp(req.params.title, "i");
          const posts = await Post.find({title});
          res.send(posts);
        } catch (error) {
          console.log(error);
        }
      },
      async getById(req, res) {
        try {
            const post = await Post.findById(req.params._id)
            res.send(post)
        } catch (error) {
            console.error(error);
        }
    },
    async getAll(req, res) {
        try {
          const { page = 1, limit = 10 } = req.query;
          const posts = await Post.find()
            .limit(limit)
            .skip((page - 1) * limit);
          res.send(posts);
        } catch (error) {
          console.error(error);
        }
      },
      async like(req, res) {
        try {
          const post = await Post.findByIdAndUpdate(
            req.params._id,
            { $push: { likes: req.user._id } },
            { new: true }
          );
          res.send(post);
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem with your like" });
        }
      },  
      async unlike(req, res) {
        try {
          const post = await Post.findByIdAndUpdate(
            req.params._id,
            { $pull: { likes: req.user._id } },
            { new: true } 
          );
      
          if (!post) {
            return res.status(404).send({ message: "Post not found" });
          }
      
          res.send(post);
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem with your unlike" });
        }
      },
      async addComment(req, res) {
        try {
          const post = await Post.findByIdAndUpdate(
            req.params._id,
            { $push: { reviews: { comment:req.body.comment, userId: req.user._id } } },
            { new: true }
          );
          res.send(post);
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem with your review" });
        }
      },
}

module.exports = PostController