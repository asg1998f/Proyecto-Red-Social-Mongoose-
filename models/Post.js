const mongoose = require('mongoose');
const User = require('./User');
const ObjectId = mongoose.SchemaTypes.ObjectId

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
    likes: [{
        type: ObjectId,
        ref: User,
    }],

    userId:{
        type: ObjectId,
        ref: User,
    }

},
    { timestamps: true }
);

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;