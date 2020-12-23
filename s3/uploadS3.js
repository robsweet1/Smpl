const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
require('dotenv').config()

const s3 = new aws.S3()

aws.config.update({
  secretAccessKey: process.env.S3_ACCESS_SECRET,
  accessKeyId: process.env.S3_ACCESS_KEY,
  region: process.env.S3_REGION,
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } 
  else {
    cb(new Error('Invalid file type, only JPE/PNG are allowed!'), false)
  }
}

const upload = multer({
  fileFilter,
  storage: multerS3({
    acl: 'public-read',
    s3,
    bucket: 'smpl-images',
    metadata: function (req, file, cb) {
      cb(null, Object.assign({}, req.body))
    },
    key: function (req, file, cb) {
      console.log(file)
      cb(null, `${Date.now().toString()}${file.originalname}`)
    },
  }),
})

module.exports = upload