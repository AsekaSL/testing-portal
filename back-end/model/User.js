const mongoose = require('mongoose')
const Schmea = mongoose.Schema

const userSchema = new Schmea({
    email: {type: String, required: true},
    password: {type: String, default: '1234'},
    role: {type: String, enum: ['student', 'professor', 'admin']},
    verifyOtp: {type: Number, default: 0},
    verifyOtpExpireAt: {type: Number, default: 0},
    isAccountVerified: {type: Boolean, default: false},
    resetOtp: {type: Number, default: 0},
    resetOtpVerifyAt: {type: Number, default: 0}
})

const User = mongoose.model('User', userSchema)

module.exports = User;