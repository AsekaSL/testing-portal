const express = require('express')
const attendanceController = require('../controller/attendanceControoler.js')
const userAuth = require('../middleware/userAuth.js')

const router = express.Router()

router.post('/mark/:id', userAuth ,attendanceController.makeAttendance)

module.exports = router