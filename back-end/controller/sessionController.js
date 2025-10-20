const Course = require('../model/Course')
const Professor = require('../model/Professor.js')
const Session = require('../model/Session.js')
const User = require('../model/User.js')

const addSession = async (req, res) => {
    try {
        
        const {courseId, title, date, validTime}  = req.body

        const course = await Course.findById(courseId);

        if (!courseId && !course) {
            return res.send({success: false, message: 'Invalid Course'})
        }

        if(!title) {
            return res.send({success: false, message: 'Missing Title'})
        }

        if(!date) {
            return res.send({success: false, message: 'Missing date'})
        }

        if(!validTime) {
            return res.send({success: false, message: 'Missing QR valid Time'})
        }

        const validTimeExpireAt = Date.now() + validTime

        const session = new Session({
            courseId, title,
            date, validTimeExpireAt
        })

        const response = await session.save()

        if (!response) {
            return res.send({success: false, message: 'Session not created'})
        }

        return res.send({success: true, message: 'Succsfully created!', sessionId: response._id})


    } catch (error) {
        return res.send({success: false, message: error.message})
    }
}

const getSessionActive = async (req, res) => {
    try {
        
        const {userId} = req.body

        const user = await User.findById(userId)

        const professor = await Professor.findOne({email: user.email})

        const session = await Session.findOne({isSessionEnd: false}).populate({
            path: 'courseId',
            match: {assignedProf: professor._id}
        })

        

        if(!session.courseId) {
            return res.send({success: false, message: 'No active sessions'})
        }

        return res.send({success: true, message: session})

    } catch (error) {
        return res.send({success: false, message: error.message})
    }
}

exports.addSession = addSession
exports.getSessionActive = getSessionActive