const express = require('express')
const router = express.Router()
const {sendReview}= require('../controller/review')

router.post('/sendReview', sendReview)

module.exports =router