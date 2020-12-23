const express = require('express')
const router = express.Router()
const Post = require('../Models/Post')
const upload = require('../s3/uploadS3')
const deleteObject = require('../s3/deleteS3')

/* Get all posts */
router.get('/', async (req, res) => {
    const posts = await Post.find()
    res.send(posts)
})

/* Get all posts in a specific board */
router.get('/board/:board', async (req, res) => {
    const posts = await Post.find({board: req.params.board})
    res.send(posts)
})

/* Get post by id */
router.get('/id/:id', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id)
        res.send(post)
    }
    catch{
        res.status(404)
        res.send('Post does not exist')
    }
})

router.post('/', upload.single('image'), async (req, res, next) => {
    try{
        const post = new Post({
            title: req.body.title,
            content: req.body.content,
            imageKey: null,
            board: req.body.board,
        })
        if(req.file !== undefined) {
            post.imageKey = req.file.key
        }
        await post.save()
        res.send(post)
    }
    catch(e){
        console.log(e)
        res.sendStatus(500)
    }

})


router.patch('/:id', async(req, res) => {
    try{
        const post = await Post.findOne({_id: req.params.id})

        if (req.body.title) {
            post.title = req.body.title
        }

        if (req.body.content){
            post.content = req.body.content
        }

        await post.save()
        res.send(post)
    }
    catch{
        res.status(404)
        res.send({error: 'Post does not exist'})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id, function(err, res){
            if(err){
                console.log(err)
            }
            else{
                if(res.imageKey){
                    deleteObject.deleteByKey(res.imageKey)
                }
            }
        })
        res.status(204).send()
    }
    catch{
        res.status(404)
        res.send({error: 'Post does not exist'})
    }
})

module.exports = router