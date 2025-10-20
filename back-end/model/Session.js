const mongoose = require('mongoose')
const schema = mongoose.Schema;

const sessionSchema = new schema({
    courseId: {type: mongoose.Schema.Types.ObjectId,ref: "Course", required: true},
    title: {type: String, required: true},
    date: {type: String, required: true},
    isSessionEnd: {type: Boolean, default: false},
    validTimeExpireAt: {type: Number, required: true},
    applyAttendance: {type: Boolean, default: false}
})

const Session = mongoose.model("Session", sessionSchema)

module.exports = Session