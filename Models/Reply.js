const mongoose = require('mongoose')

const schema = mongoose.Schema({
    threadID: String,
    replyID: String,
    content: String,
    imageKey: String,
})

module.exports = mongoose.model('Reply', schema, 'Replies')