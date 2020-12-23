const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title: String,
    content: String,
    imageKey: String,
    board: String,
})

module.exports = mongoose.model('Post', schema, 'Posts')