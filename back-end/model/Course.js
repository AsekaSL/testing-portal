const mongoose = require('mongoose')
const schema = mongoose.Schema;

const courseSchema = new schema({
    code: {type: String, required: true, unique: true},
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    semester: {type: Number, required: true},
    status: {type: String,enum:['active', 'close'], required: true},
    assignedProf: {type: mongoose.Schema.Types.ObjectId, ref: "Professor", required: true},
    credits: {type: Number, required: true},
    yearOffered: {type: Number, required: true},
    prerequisites: {type: String, required: true},
    courseSchedule: {type: String, required: true},
    departments: {type: Array, required: true}
})

const Course = mongoose.model("Course", courseSchema)

module.exports = Course