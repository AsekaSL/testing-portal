const express = require('express')
const userAuth = require('../middleware/userAuth.js')
const professorController = require('../controller/ProfessorController.js')

const router = express.Router()

router.post('/add', userAuth, professorController.addPro)
router.get('/all', userAuth, professorController.getAllPro)
router.get('/dashbord', userAuth, professorController.getDashbord)
router.get('/get-attendance', userAuth, professorController.getAttendaceInfo)
router.get('/get', userAuth, professorController.getPro)
router.put('/update', userAuth, professorController.updatePro)
router.get('/get-attendance-not-approval/:sessionId', userAuth, professorController.getAttendaceStudents)
router.post('/close-session', userAuth, professorController.closeSession)
router.post('/save-attend', userAuth, professorController.saveAttendance)
router.delete('/delete/:email', userAuth, professorController.deleteProfessor)


router.put('/update-prof', userAuth, professorController.updateAdmin)


module.exports = router