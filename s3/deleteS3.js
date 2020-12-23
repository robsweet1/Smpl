const aws = require('aws-sdk')
require('dotenv').config()

const s3 = new aws.S3()

aws.config.update({
  secretAccessKey: process.env.S3_ACCESS_SECRET,
  accessKeyId: process.env.S3_ACCESS_KEY,
  region: process.env.S3_REGION,
})


const deleteObject = {
    deleteByKey: function deleteByKey(key) {
        s3.deleteObject({Bucket: 'smpl-images', Key: key}, function (err, data) {
            if(err){
                console.log(err)
            }
        })
    }
}

module.exports = deleteObject