const express = require('express')
const router = express.Router()
const {sendReview, updateReview}= require('../controller/review')

router.post('/sendReview', sendReview)
router.patch('/updateReview/:userId', updateReview)

module.exports =router