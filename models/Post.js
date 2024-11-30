const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
}, { timestamps: true });

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;