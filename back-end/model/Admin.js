const mongoose = require('mongoose')
const Schmea = mongoose.Schema


const adminSchema = new Schmea({
    fullName: {type: String, required: true},
    department: {type: String, required: true},
    subject: {type: String, required: true},
    module: {type: Array, default: []},
    uniId: {type: String, required: true},
    nic: {type: String, required: true},
    email: {type: String, required: true},
    contactNum: {type: Number, required: true},
    address: {type: String, default: ''}
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin;