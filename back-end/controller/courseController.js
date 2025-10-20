const Course = require('../model/Course.js')
const User = require('../model/User.js')
const Professor = require('../model/Professor.js')

const addCourse = async (req, res) => {
    try {
        
        const {userId,code, name, description, semester, status, assignedProf, credits, yearOffered, prerequisites, courseSchedule, departments} = req.body;

        const user = await User.findById(userId)

        if (!user || user.role != 'admin') {
            return res.send({success: false, message: 'Invalid User, Please Re-login'})
        }

        if (!code) {
            return res.send({success: false, message: "Missing Corse code"})
        }

        if (!name) return res.send({ success: false, message: "Missing course name" });

        if (!description) return res.send({ success: false, message: "Missing course description" });

        if (!semester) return res.send({ success: false, message: "Missing semester" });

        if (!status) return res.send({ success: false, message: "Missing status" });

        if (!assignedProf) return res.send({ success: false, message: "Missing assigned professor" });

        if (!credits) return res.send({ success: false, message: "Missing course credits" });

        if (!yearOffered) return res.send({ success: false, message: "Missing year offered" });

        if (!departments || departments.length === 0) return res.send({ success: false, message: "Missing department(s)" });

        // Step 2: Optional fields with validation
        if (!prerequisites) return res.send({ success: false, message: "Missing Prerequisites" });

        if (!courseSchedule) return res.send({ success: false, message: "Missing courseSchedule" });

        // Step 3: (Optional) Example: check valid credit range
        if (credits < 1 || credits > 5) return res.send({ success: false, message: "Credits must be between 1 and 5" });

        const course = new Course({
            code, name, description, semester,
            status, assignedProf, credits,
            yearOffered, departments,
            courseSchedule, prerequisites
        })

        const response = await course.save()

        if(!response) {
            return res.send({success: false, message: 'Course not added due to unknown error'})
        }

        return res.send({success: true, message: 'Course added successfully'})

    } catch (error) {
        return res.send({success: false, message: error.message})
    }
}

const getCourseByLecture = async (req, res) => {
  try {
    
    const {userId} = req.body

    const user = await User.findById(userId)

    if (!user) {
      return res.send({success: false, message: 'Invalid User, Please re-login'})
    }

    const professor = await Professor.findOne({email: user.email})

    if(!professor) {
      return res.send({success: false, message: 'Invalid user, Re-login'})
    }

    const courses = await Course.find({assignedProf: professor._id})

    if (!courses) {
      return res.send({success: false, message: 'Thare no any courses'})
    }

    return res.send({success: true, message: courses})

  } catch (error) {
    return res.send({success: false, message: error.message})
  }
}

const editCourseByProf = async (req, res) => {
  try {
    const {userId, _id, code, credits, name } = req.body

    const course = await Course.findById(_id)

    if (!course) {
      return res.send({success: false, message: 'Invalid Couse'})
    }

    const response = await Course.updateOne({_id},  {$set: {code, credits, name}})

    if (!response) {
      return res.send({success: false, message: 'Not updated'})
    }

    return res.send({success: true, message: 'Succsfully Updated!!'})

  } catch (error) {
    return res.send(error.message)
  }
}

const getAllCourse = async (req, res) => {
  try {
    const courses = await Course.find();

    // ✅ Check if no courses found
    if (!courses || courses.length === 0) {
      return res.send({
        success: false,
        message: "There are no courses added yet",
      });
    }

    // ✅ Add professor name for each course
    const courseList = [];
    for (const course of courses) {
      const professor = await Professor.findById(course.assignedProf);

      // Create a plain JS object from Mongoose doc
      const courseObj = course.toObject();
      courseObj.professor = professor ? professor.fullName : "Unknown";

      courseList.push(courseObj);
    }

    // ✅ Return response
    return res.send({
      success: true,
      message: courseList.slice(-5),
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Server error while fetching courses",
      error: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    
    const {_id, code, name, description, semester, status, assignedProf, credits, yearOffered, prerequisites, courseSchedule, departments} = req.body
    
    if (!code) {
      return res.send({success: false, message: "Missing Corse code"})
    }

    if (!name) return res.send({ success: false, message: "Missing course name" });

    if (!description) return res.send({ success: false, message: "Missing course description" });

    if (!semester) return res.send({ success: false, message: "Missing semester" });

    if (!status) return res.send({ success: false, message: "Missing status" });

    if (!assignedProf) return res.send({ success: false, message: "Missing assigned professor" });

    if (!credits) return res.send({ success: false, message: "Missing course credits" });

    if (!yearOffered) return res.send({ success: false, message: "Missing year offered" });

    if (!departments || departments.length === 0) return res.send({ success: false, message: "Missing department(s)" });

    // Step 2: Optional fields with validation
    if (!prerequisites) return res.send({ success: false, message: "Missing Prerequisites" });

    if (!courseSchedule) return res.send({ success: false, message: "Missing courseSchedule" });

    // Step 3: (Optional) Example: check valid credit range
    if (credits < 1 || credits > 5) return res.send({ success: false, message: "Credits must be between 1 and 5" });

    

    const course = await Course.updateOne({_id}, {$set: {
      code, name, description, semester, status,
      assignedProf, credits, yearOffered, departments, prerequisites,
      courseSchedule
    }})

    if (!course) {
      return res.send({success: false, message: 'Not Updated Course'})
    }

    return res.send({success: true, message: 'Updated Succsfully!'})

  } catch (error) {
    return res.send({success: false, message: error.message})
  }
}

const deleteCourse = async (req, res) => {
  try {
    const {id} = req.params
    
    const course = await Course.deleteOne({_id: id})

    if(!course) {
      return res.send({success: false, message: 'Not deleted'})
    }

    return res.send({success: true, message: 'Deleted Sucssfully!'})
    
  } catch (error) {
    return res.send({success: false, message: error.message})
  }
}

exports.addCourse = addCourse
exports.getCourseByLecture = getCourseByLecture
exports.getAllCourse = getAllCourse
exports.update = update
exports.deleteCourse = deleteCourse
exports.editCourseByProf = editCourseByProf