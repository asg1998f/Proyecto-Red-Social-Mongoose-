const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
    title: {
        type:String,
        required: [true, "Please, fill the title"],
    },
    content: {
        type: String,
        required: [true, "Please, fill the content"],
    }, 
},
    { timestamps: true }
);

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;