const mongoose = require('mongoose')
const schema = mongoose.Schema;

const studentSchema = new schema({
    fullName: {type: String, required: true, unique: true},
    year: {type: Number, required: true},
    regiNumber: {type: String, required: true, unique: true},
    indexNum: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    contactNum: {type: String, required: true, unique: true},
    dob: {type: String},
    gender: {type: String, enum: ['male', 'female'], default: 'male'},
    address: {type: String, required: true},
    department: {type: String, enum: ['CS', 'SE', 'IS'], required: true},
    semester: {type: Number, enum: [1,2,3,4,5,6,7,8]},
    emergencyContactInfo: {type: Object, default: { name: '', contactNum: '', relation: '', address: ''}}
})

const Student = mongoose.model("Student", studentSchema)

module.exports = Student