const express = require('express')
const userAuth = require('../middleware/userAuth.js')
const sessionController = require('../controller/sessionController.js')

const router = express.Router()

router.post('/add', userAuth ,sessionController.addSession)
router.get('/get-active-session', userAuth, sessionController.getSessionActive)

module.exports = router