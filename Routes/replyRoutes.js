const express = require('express')
const router = express.Router()
const Reply = require('../Models/Reply')
const upload = require('../s3/uploadS3')
const deleteObject = require('../s3/deleteS3')

/* get all the replies to a single post by its id */
router.get('/:id', async (req, res) => {
    try{
        const replies = await Reply.find({threadID: req.params.id})
        res.send(replies)
    }
    catch{
        res.status(404)
        res.send('Post does not exist')
    }
})

/* post a reply */
router.post('/', upload.single('image'), async (req, res) => {
    try{ 
        const reply = new Reply({
            threadID: req.body.threadID,
            replyID: req.body.replyID,
            imageKey: null,
            content: req.body.content,
        })
        if(req.file !== undefined){
            reply.imageKey = req.file.key
        }
        await reply.save()
        res.send(reply)
    }
    catch(e) {
        console.log(e)
    }

})

router.delete('/:id', async (req, res) => {
    try {
        await Reply.findByIdAndDelete(req.params.id, function(err, res){
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