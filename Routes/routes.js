const express = require('express')
const router = express.Router()

router.use('/posts', require('./postsRoutes'))
router.use('/replies', require('./replyRoutes'))


module.exports = router