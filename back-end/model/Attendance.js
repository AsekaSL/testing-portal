const mongoose = require('mongoose');
const Schmea = mongoose.Schema

const attendanceSchema = new Schmea({
    sessionId: {type: mongoose.Schema.Types.ObjectId, ref: 'Session', required: true},
    studentId: {type: mongoose.Schema.Types.ObjectId, ref: 'Student' , required: true},
    courseId: {type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true},
    time: {type: String, required: true},
    status: {type: String, enum: ['present', 'late', 'absent'], required: true},
    date: {type: Number, required: true},
    professorAproval: {type: Boolean, default: false} 
})

const Attendance = mongoose.model('Attendance', attendanceSchema)

module.exports = Attendance;