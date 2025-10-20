const mongoose = require('mongoose')
const schema = mongoose.Schema;

const professorSchema = new schema({
    fullName: {type: String, required: true, unique: true},
    designation: {type: String, required: true},
    doj: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    department: {type: String, required: true},
    uniId: {type: String},
    contactNum: {type: String, required: true},
    address: {type: String, required: true},
    nic: {type: String, required: true},
    qualifications: {type: String, default: ''},
    specialization: {type: String, default: ''},
    officeHours: {type: String, default: ''},
    researchInterests: {type: String, default: ''}
})

const Professor = mongoose.model("Professor", professorSchema)

module.exports = Professor