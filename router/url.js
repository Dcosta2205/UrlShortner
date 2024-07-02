const URL = require('../models/url')
const express = require('express')
const router = express.Router()
const {handleGenerateShortUrl, handleRedirectByShortId} = require('../controller/url')

router
.route('/')
.post(handleGenerateShortUrl)


router
.route('/:shortId')
.get(handleRedirectByShortId)

module.exports = router
