const express = require('express')
const router = express.Router()
const EmailController = require('../controller/EmailController')
router.post('/contact', EmailController.ContactEmailController)

module.exports = router