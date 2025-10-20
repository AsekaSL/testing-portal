const express = require('express')
const userAuth = require('../middleware/userAuth.js')
const courseControler = require('../controller/courseController.js')

const router = express.Router()

router.post('/add', userAuth, courseControler.addCourse)
router.get('/get-prof', userAuth, courseControler.getCourseByLecture)
router.get('/all', userAuth, courseControler.getAllCourse)
router.put('/update', userAuth, courseControler.update)
router.delete('/delete/:id', userAuth, courseControler.deleteCourse)
router.put('/update-prof', userAuth, courseControler.editCourseByProf)


module.exports = router