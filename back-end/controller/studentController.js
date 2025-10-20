const Student = require('../model/Student.js')
const User = require('../model/User.js')
const Attendanace = require('../model/Attendance.js')
const validator = require('validator')
const Course = require('../model/Course.js')

const addStudent = async (req, res) => {
    try {

        const {userId,fullName, year, regiNumber, indexNum, email, contactNum, address, department, academicYear} = req.body
        
        const user = await User.findById(userId)

        if(!user) {
            return res.send({success: false, message: 'Please re-login'})
        }

        if (user.role != 'admin') {
            return res.send({success: false, message: 'Invalid login Please re-login'})
        }

        if (!fullName) {
            return res.send({success: false, message: 'Missing Fullname'})
        }

        if (!year) {
            return res.send({success: false, message: 'Missing year'})
        }

        if (!regiNumber) {
            return res.send({success: false, message: 'Missing Registration Number'})
        }

        if (!indexNum) {
            return res.send({success: false, message: 'Missing Index Number'})
        }
        

        if (!email) {
            return res.send({success: false, message: 'Missing Email'})
        } else if (!validator.isEmail(email)) {
            return res.send({ success: false, message: "Invalid Email" });
        }

        if (!contactNum) {
            return res.status(400).send({success: false, message: "Missing Contact Number"})
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
            return res.send({success: false, message: 'Missing Address'})
        }

        if (!department) {
            return res.send({success: false, message: 'Missing Department'})
        }

        if (!academicYear) {
            return res.send({success: false, message: 'Missing Academic Year'})
        }


        const student = new Student({
            fullName, year,
            regiNumber, indexNum,
            email, contactNum,
            address, department, 
            academicYear,
        })

        const response = await student.save();

        if(!response) {
            return res.send({success: false, message: 'Not Registered students'})
        }

        return res.send({success: true, message: 'Succsfully registered the student'})


    } catch (error) {
        return res.send({success: false,  message: error.message})
    }
}

const getStudent = async (req, res) => {
    try {

        const {userId} = req.body;

        const user = await User.findById(userId);

        if(!user) {
            return res.send({success: false, message: 'Invalid User'})
        }
        
        const student = await Student.findOne({email: user.email})

        if(!student) {
            return res.send({success: false, message: 'Invalid Student'})
        }

        return res.send({success: true, message: student})

    } catch (error) {
        return res.send({success: false, message: error.message})
    }
}

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find().sort({ _id: -1 }).limit(5)

        if(!students) {
            return res.send({success: false, message: 'No student'})
        }

        return res.send({success: true, message: students})

    } catch (error) {
        return res.status(401).send({success: false, message: error.message})
    }
}

const update = async (req, res) => {
    try {
        const { fullName, regiNumber, indexNum, email, contactNum, dob, gender, address, department, academicYear, emergencyContactInfo} = req.body;

        if(!fullName) {
            return res.send({success: false, message: 'Missing Full Name'})
        }

        if(!regiNumber) {
            return res.send({success: false, message: 'Missing Register Number'})
        }

        if(!indexNum) {
            return res.send({success: false, message: 'Missing Register Number'})
        }

        if (!email) {
            return res.send({success: false, message: 'Missing Email'})
        } else if (!validator.isEmail(email)) {
            return res.send({ success: false, message: "Invalid Email" });
        }

        if (!contactNum) {
            return res.send({success: false, message: "Missing Contact Number"})
        }else {
            function isSriLankanPhone(number) {
                // Matches either 07XXXXXXXX or +94XXXXXXXXX
                return /^(?:\+94|0)(7\d{8})$/.test(number);
            }
            if(!isSriLankanPhone(contactNum)) {
                return res.send({success: false, message: "Invalid contact number"})
            }
            
        }

        if(!dob) {
            return res.send({success: false, message: 'Missing Date of Birth'})
        }

        if(!gender) {
            return res.send({success: false, message: 'Missing Gender'})
        }

        if(!address) {
            return res.send({success: false, message: 'Missing Address'})
        }

        if(!department) {
            return res.send({success: false, message: 'Missing Department'})
        }

        if(!academicYear) {
            return res.send({success: false, message: 'Missing Acadamic Year'})
        }

        

        if(!emergencyContactInfo) {
            return res.send({success: false, message: 'Missing Emergemcy Contact Info'})
        }else {
            function isSriLankanPhone(number) {
                // Matches either 07XXXXXXXX or +94XXXXXXXXX
                return /^(?:\+94|0)(7\d{8})$/.test(number);
            }
            if(!isSriLankanPhone(emergencyContactInfo.contactNum)) {
                return res.send({success: false, message: "Invalid contact number"})
            }
            
        }

        const student = await Student.updateOne({regiNumber}, {$set: {fullName, regiNumber, indexNum, email, contactNum, dob, gender, address, department, academicYear, emergencyContactInfo}})

        if(!student) {
            return res.send({success: false, message: 'Not Updated'})
        }

        return res.send({success: true, message: 'Succesfully updated'})


    } catch (error) {
        return res.send({success: false, message: error.message})
    }
}

const deleteStudent = async (req, res) => {
    try {
        const { regiNumber} = req.body;

        if(!regiNumber) {
            return res.status(401).send({success: false, message: 'Missing Register Number'})
        }


        const student = await Student.findOne({regiNumber})

        if(!student) {
            return res.status(401).send({success: false, message: 'Invalid Student'})
        }

        const response = await student.deleteOne({regiNumber})

        if(!response) {
            return res.status(401).send({success: false, message: 'Not deleted'})
        }

        return res.status(201).send({success: true, message: response})

    } catch (error) {
        return res.status(401).send({success: false, message: error.message})
    }
}



const getDashboard = async (req, res) => {
    try {
        const {userId} = req.body

        const user  = await User.findById(userId)

        if (!user) {
            return res.send({success: false, message: 'Please re-login'})
        }

        const student = await Student.findOne({email: user.email})

        if (!student) {
            return res.send({success: false, message: 'Student is not valid!'})
        }

        const attendance = await Attendanace.find({studentId: student._id}).populate({
            path: 'courseId', 
        })

        const attendanceRate = ( ( attendance.filter(attend => attend.status == 'present').length / attendance.length  ) * 100 ) + '%'

        const totalClasses = attendance.length

        const presentDays = attendance.filter(attend => attend.status == 'present').length

        const absentDays = attendance.filter(attend => attend.status == 'absent').length

        const formattedAttendance = attendance.map(a => {
            const timestamp = Number(a._doc?.date || a.date);

            // check if timestamp is valid
            const dateValue = new Date(timestamp);
            const formattedDate = isNaN(dateValue.getTime())
                ? "Invalid Date"
                : dateValue.toISOString().split('T')[0];

            return {
                ...a._doc,     // flatten mongoose _doc
                date: formattedDate
            };
        });

        const recentAttendance = formattedAttendance.slice(-5);

        const message = {
            attendanceRate,
            totalClasses,
            presentDays,
            absentDays,
            recentAttendance
        }

        return res.send({success: true, message})

    } catch (error) {
        console.log(error)
        return res.send({success: false, message: error.message})
    }
}

const viewAttendance = async (req, res) => {
    try {
        const {userId} = req.body

        const user  = await User.findById(userId)

        if (!user) {
            return res.send({success: false, message: 'Please re-login'})
        }

        const student = await Student.findOne({email: user.email})
        
        if (!student) {
            return res.send({success: false, message: 'Student is not valid!'})
        }

        const courses = await Course.find({semester: student.semester, yearOffered: student.year, departments: student.department}).populate({
            path: 'assignedProf',
            select: 'fullName'
        })

        const attendanceData = await Promise.all(
            
            courses.map(async (course) => {
                const records = await Attendanace.find({
                    studentId: student._id,
                    courseId: course._id
                }).sort({date: -1}) 

                console.log(records)

                if(records.length == 0) {
                    return {
                        id: course.code,
                        name: course.name,
                        instructor: course.assignedProf?.fullName || 'N/A',
                        totalClasses: 0, 
                        totalClasses: 0,
                        attendedClasses: 0,
                        attendancePercentage: 0,
                        status: "No Data",
                        lastAttendance: "-",
                        attendanceRecords: [],
                    }
                }

                const totalClasses = records.length
                const attendedClasses = records.filter( r => r.status === 'present' | r.status === 'late').length

                const attendancePercentage = ( (attendedClasses / totalClasses) * 100 ).toFixed(1)

                let status = "Poor"
                if(attendancePercentage >= 90) status = 'Good'
                else if (attendancePercentage >= 85 ) status = 'Average'

                const lastAttendance = new Date(Number(records[0].date)).toISOString().split('T')[0]

                const attendanceRecords = records.map( r => ({
                    date: new Date(Number(r.date)).toISOString().split('T')[0],
                    status: r.status.charAt(0).toUpperCase + r.status.slice(1),
                    time: r.time
                }))

                return {
                    id: course.code,
                    name: course.name,
                    instructor: course.assignedProf?.fullName || "N/A",
                    totalClasses,
                    attendedClasses,
                    attendancePercentage,
                    status,
                    lastAttendance,
                    attendanceRecords,
                };

            })

        )

        return res.send({success: true, message: attendanceData})


    } catch (error) {
        return res.send({success: false, message: error.message})
    }
}

exports.getStudent = getStudent
exports.getAllStudents = getAllStudents
exports.update = update
exports.deleteStudent = deleteStudent
exports.addStudent = addStudent
exports.getDashboard = getDashboard
exports.viewAttendance = viewAttendance