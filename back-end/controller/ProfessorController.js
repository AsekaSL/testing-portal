const Professor = require('../model/Professor.js')
const User = require('../model/User.js')
const  validator = require('validator')
const Course = require('../model/Course.js')
const Student = require('../model/Student.js')
const Attendance = require('../model/Attendance.js')
const Session = require('../model/Session.js')

const addPro = async (req, res) => {
    try {
        const {userId,fullName, designation, doj, email, department, uniId, contactNum, address, nic} = req.body;

        const user = await User.findById(userId)

        if (!user || user.role != 'admin') {
            return res.send({success: false, message: 'Invalid User, Please Re-login'})
        }

        if (!fullName) {
            return res.send({success: false, message: 'Missing Full name'})
        }

        if (!designation) {
            return res.send({success: false, message: 'Missing Designation'})
        }

        if (!doj) {
            return res.send({success: false, message: 'Missing Date of Birth'})
        }

        if (!email) {
            return res.send({success: false, message: 'Missing Email'})
        } else if (!validator.isEmail(email)) {
            return res.send({ success: false, message: "Invalid Email" });
        }

        if (!department) {
            return res.send({success: false, message: 'Missing Department'})
        }

        if (!uniId) {
            return res.send({success: false , message: 'Missing University ID Number'})
        }

        if (!contactNum) {
            return res.send({success: false , message: 'Missing Contact Number'})
        }else {
            function isSriLankanPhone(number) {
                // Matches either 07XXXXXXXX or +94XXXXXXXXX
                return /^(?:\+94|0)(7\d{8})$/.test(number);
            }
            if(!isSriLankanPhone(contactNum)) {
                return res.status(400).send({success: false, message: "Invalid contact number"})
            }
            
        }

        if (!address) {
            return res.send({success: false , message: 'Missing Address'})
        }

        if (!nic) {
            return res.send({success: false , message: 'Missing Address'})
        }

        const professor = new Professor({
            fullName, designation,
            doj, email, department, uniId, contactNum,
            address, nic
        })

        const response = await professor.save()

        if (!response) {
            return res.send({success: false, message: 'Not registered the Professor'})
        }

        return res.send({success: true, message: 'Succsfully registered !'})

    } catch (error) {
        return res.send({success: false, message: error.message})
    }
}

const getAllPro = async (req, res) => {
    try {
        
        const professors = await Professor.find()

        if (!professors) {
            return res.send({success: false, message: 'Not any Professor Regitered'})
        }

        return res.send({success: true, message: {professors, lastProfessors: professors.slice(-5)}})

    } catch (error) {
        return res.send({success: false, message: error.message})
    }
}

const getPro = async (req, res) => {
    try {

        const {userId} = req.body;

        const user = await User.findById(userId);

        if(!user) {
            return res.send({success: false, message: 'Invalid User'})
        }
        
        const professor = await Professor.findOne({email: user.email})

        if(!professor) {
            return res.send({success: false, message: 'Invalid Student'})
        }

        return res.send({success: true, message: professor})

    } catch (error) {
        return res.send({success: false, message: error.message})
    }
}

const updatePro = async (req, res) => {
    try {
        const {fullName, designation, doj, email, department, uniId, contactNum, address, nic, qualifications, specialization, officeHours, researchInterests} = req.body;

        if (!fullName) {
            return res.send({success: false, message: 'Missing Full name'})
        }

        if (!designation) {
            return res.send({success: false, message: 'Missing Designation'})
        }

        if (!doj) {
            return res.send({success: false, message: 'Missing Date of Birth'})
        }

        if (!email) {
            return res.send({success: false, message: 'Missing Email'})
        } else if (!validator.isEmail(email)) {
            return res.send({ success: false, message: "Invalid Email" });
        }

        if (!department) {
            return res.send({success: false, message: 'Missing Department'})
        }

        if (!uniId) {
            return res.send({success: false , message: 'Missing University ID Number'})
        }

        if (!contactNum) {
            return res.send({success: false , message: 'Missing Contact Number'})
        }else {
            function isSriLankanPhone(number) {
                // Matches either 07XXXXXXXX or +94XXXXXXXXX
                return /^(?:\+94|0)(7\d{8})$/.test(number);
            }
            if(!isSriLankanPhone(contactNum)) {
                return res.status(400).send({success: false, message: "Invalid contact number"})
            }
            
        }

        if (!address) {
            return res.send({success: false , message: 'Missing Address'})
        }

        if (!nic) {
            return res.send({success: false , message: 'Missing Address'})
        }

        if (!qualifications) {
            return res.send({success: false, message: 'Missing Qualifications'})
        }

        if (!specialization) {
            return res.send({success: false, message: 'Missing Specialization'})
        }

        if (!officeHours) {
            return res.send({success: false, message: 'Missing Office Hours'})
        }

        if (!researchInterests) {
            return res.send({success: false, message: 'Missing Research Interests'})
        }

        const professor = await Professor.updateOne({email},{ $set: {
            fullName, designation,
            doj, email, department, uniId, contactNum,
            address, nic, qualifications, specialization,
            officeHours, researchInterests
        }})

        if (!professor) {
            return res.send({success: false, message: 'Not Updated'})
        }

        return res.send({success: true, message: 'Succsfully Updated !'})

    } catch (error) {
        return res.send({success: false, message: error.message})
    }
}

const getDashbord = async (req, res) => {
    try {
        
        const {userId} = req.body

        const user = await User.findById(userId)

        if (user.role != 'professor') {
            return res.send({success: false, message: 'Please re-login'})
        }

        const professor = await Professor.findOne({email: user.email})

        // Count of courses taught by professor
        const courseCount = await Course.countDocuments({ assignedProf: professor._id });

        // Count of total students
        const totalStudents = await Student.countDocuments();

        // Today’s date (YYYY-MM-DD)
        const today = new Date().toISOString().split('T')[0];

        // Get all courses taught by professor
        const professorCourses = await Course.find({ assignedProf: professor._id }).select('_id');
        const courseIds = professorCourses.map(c => c._id);

        // Get today's attendance records for those courses
        const todayAttendances = await Attendance.find({
            courseId: { $in: courseIds },
            date: today
        });

        const todayTotalAttendance = todayAttendances.length;
        const todayPresentCount = todayAttendances.filter(a => a.status === 'present').length;

        // Calculate percentage
        const attendancePercentage = todayTotalAttendance > 0
            ? ((todayPresentCount / todayTotalAttendance) * 100).toFixed(2)
            : 0;


        // Get recent 5 attendance sessions
        const recentAttendanceRaw = await Attendance.aggregate([
            { $match: { courseId: { $in: courseIds } } },
            {
                $group: {
                    _id: { courseId: "$courseId", date: "$date" },
                    totalStudents: { $sum: 1 },
                    presentCount: {
                        $sum: {
                            $cond: [{ $eq: ["$status", "present"] }, 1, 0]
                        }
                    }
                }
            },
            { $sort: { "_id.date": -1 } },
            { $limit: 5 }
        ]);

        // Attach course name to recent attendance
        const recentAttendance = await Promise.all(
            recentAttendanceRaw.map(async (rec) => {
                const course = await Course.findById(rec._id.courseId).select("name code");
                const readableDate = new Date(Number(rec._id.date)).toISOString().split('T')[0]; // ✅ convert timestamp

                return {
                course: course ? `${course.code} - ${course.name}` : "Unknown",
                students: rec.totalStudents,
                present: rec.presentCount,
                date: readableDate
                };
            })
            );

        return res.send({
            success: true,
            message: {
                totalStudents,
                courseCount,
                todayTotalAttendance,
                todayPresentCount,
                attendancePercentage: `${attendancePercentage}%`,
                recentAttendance
            }
        });

    } catch (error) {
        return res.send({success: false, message: error.message})
    }
}

const getAttendaceInfo = async (req, res) => {
    try {
        
        const {userId} = req.body

        const user = await User.findById(userId)

        if (user.role != 'professor') {
            return res.send({success: false, message: 'Please re-login'})
        }

        const professor = await Professor.findOne({email: user.email})

        

        // Get all courses taught by professor
        const professorCourses = await Course.find({ assignedProf: professor._id }).select('_id code');
        const courseIds = professorCourses.map(c => c._id);

        

         // Get today's attendance records for those courses
        const sessions = await Session.find({
            courseId: { $in: courseIds },
            applyAttendance: false
        })

        


        const sessionsWithCourse = sessions.map(s => {
            const course = professorCourses.find(c => c._id.equals(s.courseId));
            return {
                ...s.toObject(),
                courseCode: course?.code || "Unknown",
            };
        });
        
        return res.send({success: true, message: sessionsWithCourse})
        
    } catch (error) {
        return res.send({success: false, message: error.message})
    }
}

const getAttendaceStudents = async (req, res) => {
    try {
        
        const {sessionId} = req.params

        if (!sessionId) {
            return res.send({success: false, message: 'Invalid Attendanace ! '})
        }
        
        const attendance = await Attendance.find({sessionId}).populate({path: 'studentId'});

        return res.send({success: true, message: attendance})

    } catch (error) {
        return res.send({success: false, message: error.message})
    }
}

const closeSession = async (req, res) => {
    try {
        const {userId, sessionId} = req.body

        const session = await Session.findById(sessionId)

        if (!session) {
            return res.send({success: false, message: 'Invalid Session'})
        }

        session.isSessionEnd = true

        session.save()

         const sessionInfo = await Session.findById(sessionId).populate({
            path: 'courseId',
            select: 'departments _id'
        });

        const departments = sessionInfo.courseId.departments;

        const students = await Student.find({
            department: { $in: departments }
        }).select('_id');

        const allStudentIds = students.map((s) => s._id.toString());

        // Find students who are already marked as "present"
        const attended = await Attendance.find({
            sessionId: sessionId,
            status: 'present'
        }).select('studentId');

        const attendedIds = attended.map((a) => a.studentId.toString());

        // Find students who did NOT attend
        const absentIds = allStudentIds.filter(
            (id) => !attendedIds.includes(id)
        );

        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });

        // Create "absent" records for them
        const absentRecords = absentIds.map((studentId) => ({
            sessionId: sessionId,
            courseId: sessionInfo.courseId._id,
            studentId: studentId,
            time: timeString,
            date: Date.now(),
            status: 'absent'
        }));

        if (absentRecords.length > 0) {
            await Attendance.insertMany(absentRecords);
        }

        return res.send({
            success: true,
            message: `Session closed successfully. ${absentRecords.length} students marked absent.`
        });
        

    } catch (error) {
        return res.send({success: true, message: error.message})
    }
}

const saveAttendance = async (req, res) => {
    try {
        
        const {userId, sessionId} = req.body

        if(!sessionId) {
            return res.send({success: false , message: 'Invalid Session Id'})
        }

        const attend = await Attendance.updateMany({sessionId}, {$set: {professorAproval: true}})

        if(!attend) {
            return res.send({success: false , message: 'Not approved'})
        }

        const session = await Session.updateOne({_id: sessionId}, {$set: {applyAttendance: true}})

        return res.send({success: true, message: 'Succsfully save attendannce!'})

    } catch (error) {
        return res.send({success: false, message: error.message})
    }
}

const updateAdmin = async (req, res) => {
    try {
        const {userId,fullName, designation, doj, email, department, uniId, contactNum, address, nic} = req.body;

        const user = await User.findById(userId)

        if (!user || user.role != 'admin') {
            return res.send({success: false, message: 'Invalid User, Please Re-login'})
        }

        

        if (!fullName) {
            return res.send({success: false, message: 'Missing Full name'})
        }

        if (!designation) {
            return res.send({success: false, message: 'Missing Designation'})
        }

        if (!doj) {
            return res.send({success: false, message: 'Missing Date of Birth'})
        }

        if (!email) {
            return res.send({success: false, message: 'Missing Email'})
        } else if (!validator.isEmail(email)) {
            return res.send({ success: false, message: "Invalid Email" });
        }

        if (!department) {
            return res.send({success: false, message: 'Missing Department'})
        }

        if (!uniId) {
            return res.send({success: false , message: 'Missing University ID Number'})
        }

        if (!contactNum) {
            return res.send({success: false , message: 'Missing Contact Number'})
        }else {
            function isSriLankanPhone(number) {
                // Matches either 07XXXXXXXX or +94XXXXXXXXX
                return /^(?:\+94|0)(7\d{8})$/.test(number);
            }
            if(!isSriLankanPhone(contactNum)) {
                return res.status(400).send({success: false, message: "Invalid contact number"})
            }
            
        }

        if (!address) {
            return res.send({success: false , message: 'Missing Address'})
        }

        if (!nic) {
            return res.send({success: false , message: 'Missing Address'})
        }

        const existProfessor = await Professor.findOne({email})

        const professor = await Professor.updateOne({_id: existProfessor._id},{
            fullName, designation,
            doj, email, department, uniId, contactNum,
            address, nic
        })

        if (!professor) {
            return res.send({success: false, message: 'Not Updated'})
        }

        return res.send({success: true, message: 'Succsfully Updated !'})
        
    } catch (error) {
        return res.send({success: false, message: req.message})
    }
}

const deleteProfessor = async (req, res) => {
    try {
        const {email} = req.params

        if (!email) {
            return res.send({success: false, message: 'Missing email'})
        }


        const response = await Professor.deleteOne({email})

        if(!response) {
            return res.send({success: false, message: response.message})
        }

        return res.send({success: true, message: 'Succsfully deleted!'})

    } catch (error) {
        return res.send({success: false, message: error.message})
    }
}

exports.addPro = addPro
exports.getAllPro = getAllPro
exports.getPro = getPro
exports.updatePro = updatePro
exports.getDashbord = getDashbord
exports.getAttendaceInfo = getAttendaceInfo
exports.getAttendaceStudents = getAttendaceStudents
exports.closeSession = closeSession
exports.saveAttendance = saveAttendance
exports.updateAdmin = updateAdmin
exports.deleteProfessor = deleteProfessor