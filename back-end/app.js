const express = require('express');
const cors = require('cors');
const studentRouter = require('./routers/studentRoutes.js')
const authRouter = require('./routers/authRouters.js')
const courseRouter = require('./routers/courseRoutes.js')
const professorRouter = require('./routers/professorRoutes.js')
const sessionRouter = require('./routers/sessionRoutes.js')
const attendanceRouter = require('./routers/attendanceRoutes.js')
const adminRouter = require('./routers/adminRoutes.js')
const cookieParser = require('cookie-parser')


const app = express();

const allowedOrigins = ['http://localhost:5173']

app.use(cors({origin: allowedOrigins, credentials: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser())

app.use('/api/auth', authRouter)
app.use('/api/student', studentRouter)
app.use('/api/course', courseRouter)
app.use('/api/professor', professorRouter)
app.use('/api/session', sessionRouter)
app.use('/api/attendance', attendanceRouter)
app.use('/api/admin', adminRouter)

module.exports = app;