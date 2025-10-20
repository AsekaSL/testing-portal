const express = require('express')
const userAuth = require('../middleware/userAuth.js')
const studentController = require('../controller/studentController.js')

const router = express.Router()

router.post('/add', userAuth, studentController.addStudent)
router.get('/get', userAuth ,studentController.getStudent)
router.get('/getAll', userAuth ,studentController.getAllStudents)
router.put('/update', userAuth , studentController.update)
router.delete('/delete', userAuth ,studentController.deleteStudent)

//Student view attendance
router.get('/view-attend', userAuth, studentController.viewAttendance)


router.get('/dashboard', userAuth, studentController.getDashboard)

module.exports = router