const Session = require('../model/Session.js')
const Attendance = require('../model/Attendance.js')
const User = require('../model/User.js')
const Student = require('../model/Student.js')
const Course = require('../model/Course.js')

const makeAttendance  = async (req, res) => {
    try {
        
        const {id} = req.params
        const {userId} = req.body

        const user = await User.findById(userId)

        if (user.role != 'student') {
            return res.send({success: false, message: 'Please re-login as a Student'})
        }

        const student = await Student.findOne({email: user.email})

        if (!student) {
            return res.send({success: false, message: 'Please re-login'})
        }
        const session = await Session.findById(id)
        
        if (!session) {
            return res.send({success: false, message: 'Invlaid Session'})
        }

        const course = await Course.findOne({_id: session.courseId, departments: student.department})

        if (!course) {
            return res.send({success: false, message: 'You can\'t attend to this course '})
        }

        const exsistingAttend = await Attendance.findOne({sessionId: session._id, studentId: student._id})

        if (exsistingAttend) {
            return res.send({success: false, message: 'You have already marked your attendance for this session.'})
        }

        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
        
        if(session.validTimeExpireAt < Date.now()) {

            const  attendance = new Attendance({
                sessionId: id,
                courseId: session.courseId,
                studentId: student._id,
                time: timeString,
                status: 'late',
                date: Date.now()
            })

            const response = await attendance.save()

            return res.send({success: false, message: "Session is Expire"})
        }

        const  attendance = new Attendance({
            sessionId: id,
            courseId: session.courseId,
            studentId: student._id,
            time: timeString,
            status: 'present',
            date: Date.now()
        })

        const response = await attendance.save()

        if(!response) {
            return res.send({success: false, message: 'Not attend'})
        }

        return res.send({success: true, message: 'Succsfully attend!'})

    } catch (error) {
        return res.send({success: false, message: error.message})
    }    
}

exports.makeAttendance = makeAttendance