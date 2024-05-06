const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    id: Number,
    title: String,
    score: Number,
    viewCount: Number,
    commentCount: Number,
    creationDate: Date,
    answerCount: Number,
    tags: [String],
    ownerUserId: Number
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
