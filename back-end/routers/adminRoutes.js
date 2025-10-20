const express = require('express')
const userAuth = require('../middleware/userAuth.js')
const adminController = require('../controller/adminController.js')

const router = express.Router()

router.get('/admin', userAuth ,adminController.getAdmin)
router.get('/admins', userAuth ,adminController.getAllAdmins)
router.put('/update', userAuth , adminController.updateAdmin)
router.delete('/delete', userAuth ,adminController.deleteAdmin)


router.get('/dashboard', userAuth, adminController.getDashboard)

module.exports = router