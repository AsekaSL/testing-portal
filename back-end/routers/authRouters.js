const express = require('express')
const authController = require('../controller/authController.js')
const userAuth = require('../middleware/userAuth.js')

const router = express.Router()

router.post('/register', authController.register)
router.post('/login' ,authController.login)
router.post('/logout', userAuth, authController.logout)
router.post('/send-otp', userAuth, authController.sendVerifyOtp)
router.post('/verify-otp', userAuth, authController.verifyEmail)
router.post('/send-reset-otp', authController.sendResetOtp)
router.post('/reset-password', authController.resetPassword)
router.post('/is-auth', userAuth, authController.isAuth)

module.exports = router