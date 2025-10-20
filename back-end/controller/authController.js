const User = require('../model/User.js')
const Student = require('../model/Student.js')
const Admin = require('../model/Admin.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const validator = require('validator')
const Professor = require('../model/Professor.js')

const register = async (req, res) => {
    try {
        const {email, password, role} = req.body;

        const existingUser = await User.findOne({email})

        if(existingUser) {
            return res.send({success: false, message: "Someone using thing email , Please chanage the email"})
        }

        let message;

        if (!email) {
            return res.status(401).send({ success: false, message: "Missing Email" });
        }

        // Simple email regex validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(401).send({ success: false, message: "Invalid Email Format" });
        }

        if (!password) {
            return res.status(401).send({ success: false, message: "Missing Password" });
        }

        // Check minimum password length (example: 6 characters)
        if (password.length < 6) {
            return res.status(401).send({ success: false, message: "Password must be at least 6 characters" });
        }

        if (!role) {
            return res.status(401).send({ success: false, message: "Missing Role" });
        }

        const validRoles = ["student", "lecturer", "admin"];
        if (!validRoles.includes(role)) {
            return res.status(401).send({ success: false, message: "Invalid Role" });
        }

        if (role == 'student') {
            const {fullName, year, department, regiNumber, contactNum, address, email, indexNum, courseModules} = req.body;

            if (!fullName) {
                return res.status(401).send({ success: false, message: "Missing Student Full Name" });
            }
            if (!year) {
                return res.status(401).send({ success: false, message: "Missing Year" });
            }
            if (!department) {
                return res.status(401).send({ success: false, message: "Missing Department" });
            }
            if (!regiNumber) {
                return res.status(401).send({ success: false, message: "Missing Registration Number" });
            }
            if (!contactNum) {
                return res.status(401).send({ success: false, message: "Missing Contact Number" });
            }
            if (!address) {
                return res.status(401).send({ success: false, message: "Missing Address" });
            }
            if (!email) {
                return res.status(401).send({ success: false, message: "Missing Email" });
            }
            if (!indexNum) {
                return res.status(401).send({ success: false, message: "Missing Index Number" });
            }
            if (!courseModules || courseModules.length === 0) {
                return res.status(401).send({ success: false, message: "Missing Course Modules" });
            }

            const student = new Student({fullName, year, department, regiNumber, contactNum, address, email, indexNum, courseModules});

            const response = await student.save()

            if (!response) {
                return res.status(401).send({success: false, message: response.message})
            }

            message = 'Succsfully Student Registered'

        }else if (role == 'lecture') {
            const {
                fullName,
                department,
                subject,
                module,
                uniId,
                nic,
                email,
                contactNum,
                address
            } = req.body;

            // Manual validations
            if (!fullName) {
                return res.status(401).send({ success: false, message: "Missing Full Name" });
            }
            if (!department) {
                return res.status(401).send({ success: false, message: "Missing Department" });
            }
            if (!subject) {
                return res.status(401).send({ success: false, message: "Missing Subject" });
            }
            if (!module) {
                return res.status(401).send({ success: false, message: "Missing Module" });
            }
            if (!uniId) {
                return res.status(401).send({ success: false, message: "Missing University ID" });
            }
            if (!nic) {
                return res.status(401).send({ success: false, message: "Missing NIC" });
            }
            if (!email) {
                return res.status(401).send({ success: false, message: "Missing Email" });
            }
            if (!contactNum) {
                return res.status(401).send({ success: false, message: "Missing Contact Number" });
            }
            if (!address) {
                return res.status(401).send({ success: false, message: "Missing Address" });
            }

            const admin = new Admin({fullName, department, subject, module, uniId, nic, email, contactNum, address})

            const response = await admin.save()

            if (!response) {
                return res.status(401).send({success: false, message: response.message})
            }

            message = 'Succsfully Admin Registered'

        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({name, email, password: hashedPassword})

        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Welcome to Student Portal",
            text: `Welcome to Student Portal. Your account has been created with email id: ${email}`
        }

        return res.status(201).send({success: true, message})

    } catch (error) {
        return res.status(401).send({success: false, message: error.message})
    }
}

const login = async (req,res) => {
    try {
        const {username, password} = req.body;

        if (!username) {
            return res.send({ success: false, message: "Missing Email" });
        }else if (!validator.isEmail(username)) {
            return res.send({ success: false, message: "Invalid Email" });
        }

        if (!password) {
            return res.send({ success: false, message: "Missing Password" });
        }

        // Check minimum password length (example: 6 characters)
        if (password.length < 6) {
            return res.send({ success: false, message: "Password must be at least 6 characters" });
        }

        let user = await User.findOne({email: username});

        if(!user) {
            
            const student = await Student.findOne({email: username})
            const professor = await Professor.findOne({email: username})

            let newUser;

            if(student) {
                newUser = new User({email: student.email, role: 'student'})
                await newUser.save()
            }else if (professor) {
                newUser = new User({email: professor.email, role: 'professor'})
                await newUser.save()
            }else {
                return res.send({sucess: false, message: 'User not found'})
            }
            
            user = newUser;
        }

        // const isMatch = await bcrypt.compare(password, user.password);

        // if (!isMatch) {
        //     return res.send({sucess: false, message: 'Invalid Password'})
        // }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'})

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 1*24*60*60*100 //Milisecond 
        })

        return res.send({success: true, message: 'Succsfully Login !', role: user.role})

    } catch (error) {
        return res.send({success: false, message: error.message})
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict'
        })

        return res.send({success: true, message: 'Logged out'})
    } catch (error) {
        return res.send({success: false, message: error.message})
    }
}

const isAuth = async (req, res) => {
    try {
        
        const {userId} = req.body;

        const user = await User.findById(userId)

        if(!user) {
            return res.send({success: false, message: 'Please re-login User not defined'})
        }

        return res.send({success: true, message: 'Logged in', role: user.role})

    } catch (error) {
        console.log(error)
        return res.send(error.message)
    }
}

const sendVerifyOtp = async (req, res) => {
    try {
        //Get the attributes from request
        const {userId} = req.body;

        //Check user login or not
        if(!userId) {
            return res.status(400).send({success: false, message: "Please re-login"})
        }
        
        //Get the user details 
        const  user = await User.findById(userId)

        //Check if its verify or not
        if (user.isAccountVerified) {
            return res.status(400).send({success: false, message: "Account already verified"})
        }

        //Create the otp
        const otp = String(Math.floor(100000 + Math.random() * 900000))
        
        //Setting the otp and the databases
        user.verifyOtp = otp
        user.verifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000
        await user.save();

        //Build the mail body
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Account verification OTP',
            html: `Your OTP is${otp}. Verify your account using this OTP.`
        }

        //Send mail to user
        await transporter.sendMail(mailOptions)

        return res.status(200).send({success: true, message: "Check your emails"})

    } catch (error) {
        return res.status(401).send({success: false, message: error.message})
    }
}

// User OTP Verification function
const verifyEmail = async (req, res) => {
    try {
        //Get the attributes from request
        const {userId, otp} = req.body;

        //Check if the user login or not
        if(!userId) {
            return res.status(400).send({success: false, message: "Please re-login"})
        }
        
        //Check if the OTP missing or not
        if (!otp) {
            return res.status(400).send({success: false, message: "Missing OTP code"})
        }

        //Get the user details using user id 
        const user = await User.findById(userId);

        //Check if the user if valid or not 
        if(!user) {
            return res.status(400).send({success: false, message: "User not found"})
        }

        //Check if otp is missing and valid or not
        if (user.verifyOtp == '' || user.verifyOtp !== otp) {
            return res.status(400).send({success: false, message: "Invalid OTP"})
        }

        //Check otp expire or not
        if(user.verifyOtpExpireAt < Date.now()) {
            return res.status(400).send({success: false, message: "OTP Expired"})
        }

        //make user verify
        user.isAccountVerified = true
        user.verifyOtp = ''
        user.verifyOtpExpireAt = ''

        //Save the user
        await user.save()

        return res.status(400).send({success: true, message: "Email verify succesfully "})

    } catch (error) {
        //Send error message when it is cause error
        return res.status(400).send({success: false, message: error.message})
    }
}

// User send OTP for password reset 
const sendResetOtp = async (req, res) => {
    try {
        //Get the attributes from request
        const {email} = req.body;

        //Check the email is valid or not
        if (!email) {
            return res.status(400).send({success: false, message: "Email is required"})
        } else if (!validator.isEmail(email)) {
            return res.status(400).send({ success: false, message: "Invalid Email" });
        }

        //Get user from databases
        const user = await User.findOne({email})

        //Check if the user found or not
        if(!user) {
            return res.status(400).send({sccess: false,  message: "User not found"})
        }

        //Build the OTP and the send to database
        const otp = String(Math.floor(100000+ Math.random() * 900000))

        user.resetOtp = otp
        user.resetOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000
        await user.save();

        //Build email structure
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Password Reset OTP',
            text: `Your OTP for resetting your password is ${otp}`
        }


        //send emails
        await transporter.sendMail(mailOptions)

        return res.status(200).send({success: true, message: "OTP sent to your email"})

    } catch (error) {
        //Send error message when it is cause error
        return res.status(400).send({success: false, message: error.message})
    }
}

//User reset password function
const resetPassword = async (req, res) => {
    try {
        //Get the attributes from request
        const {email, otp, newPassword} = req.body;

        //Check if the Email missing or not and valid or not
        if (!email) {
            return res.status(400).send({ success: false, message: "Missing Email" });
        } else if (!validator.isEmail(email)) {
            return res.status(400).send({ success: false, message: "Invalid Email" });
        }

        //Check if the OTP missing or not
        if (!otp) {
            return res.status(400).send({success: false, message: "Missing OTP code"})
        }

        //Check if the newPassword missing or not and valid or not
        if (!newPassword) {
            return res.status(400).send({ success: false, message: "Missing Password" });
        }else if (!validator.isStrongPassword(newPassword)) {
            return res.status(400).send({ success: false, message: "Please create Strong password" });
        }

        //Get user from database
        const user = await User.findOne({email})

        //Check user valid or not
        if(!user) {
            return res.status(400).send({success: false, message: "User not found"})
        }

        //Check resetOtp missing and valid or not
        if(user.resetOtp == "" || user.resetOtp !== otp) {
            return res.status(400).send({success: false, message: "Invalid OTP"})
        }

        //Check otp expire
        if (user.resetOtpExpireAt < Date.now()) {
            return res.status(400).send({success: false,  message: "OTP Expired"})
        }

        //hashed the password
        const hashedPassword = await bcrypt.hash(newPassword, 10);


        //saved password to database
        user.password = hashedPassword
        user.resetOtp = ''
        user.resetOtpExpireAt = 0

        await user.save();

        return res.status(200).send({success: false, message: 'Password has been reset succesfully'})


    } catch (error) {
        //Send error message when it is cause error
        return res.status(400).send({success: false, message: error.message})
    }
}

exports.register = register
exports.login = login
exports.logout = logout
exports.sendVerifyOtp = sendVerifyOtp
exports.verifyEmail = verifyEmail
exports.sendResetOtp = sendResetOtp
exports.resetPassword = resetPassword
exports.isAuth = isAuth;

/*
const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'})

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 1*24*60*60*100 //Milisecond
        })*/