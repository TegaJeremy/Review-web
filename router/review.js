const express = require('express')
const router = express.Router()
const {sendReview, updateReview,deleteReview}= require('../controller/review')

router.post('/sendReview', sendReview)
router.patch('/updateReview/:userId', updateReview)
router.delete('/deleteReview/:userId', deleteReview)

module.exports =router