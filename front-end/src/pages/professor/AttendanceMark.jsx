import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

const AttendanceMark = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [students, setStudents] = useState([]);
  const [attendanceData, setAttendanceData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {backendUrl} = useContext(AppContext)

  useEffect(() => {
    loadProfessorCourses();
  }, []);

  useEffect(() => {
    if (selectedCourse) {
      loadStudentsForCourse(selectedCourse);
    }
  }, [selectedCourse]);

  const loadProfessorCourses = async () => {
    try {
      // Mock API call - replace with actual API

      axios.defaults.withCredentials = true

      const {data} = await axios.get(backendUrl + '/professor/get-attendance');

      if(data.success) {
        setCourses(data.message);
      }

      
    } catch {
      setError("Failed to load courses. Please try again.");
    }
  };

  const loadStudentsForCourse = async (courseId) => {
    try {

      axios.defaults.withCredentials = true
      
      const {data} = await axios.get(backendUrl + `/professor/get-attendance-not-approval/${selectedCourse}`)

      if (data.success) {
        setStudents(data.message)
        
      }else {
        setError(data.message)
      }
    } catch {
      setError("Failed to load students. Please try again.");
    }
  };

  const handleAttendanceChange = (studentId, status) => {
    setAttendanceData(prev => ({
      ...prev,
      [studentId]: status
    }));
  };

  const markAllPresent = () => {
    const allPresent = {};
    students.forEach(student => {
      allPresent[student.id] = "present";
    });
    setAttendanceData(allPresent);
  };

  const markAllAbsent = () => {
    const allAbsent = {};
    students.forEach(student => {
      allAbsent[student.id] = "absent";
    });
    setAttendanceData(allAbsent);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCourse) {
      setError("Please select a course.");
      return;
    }

    saveAttendance()

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Mock API call - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Reset form
      setSelectedCourse("");
      setStudents([]);
      setAttendanceData({});
    } catch {
      setError("Failed to save attendance. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "present":
        return "bg-green-100 text-green-800";
      case "absent":
        return "bg-red-100 text-red-800";
      case "late":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const saveAttendance = async () => {
    try {
      
      axios.defaults.withCredentials = true

      const {data} = await axios.post(backendUrl + '/professor/save-attend', {sessionId: selectedCourse})

      if(data.success) {
        toast.success(data.message)
        loadProfessorCourses()
      }else{
        toast.error(data.message)
      }

    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-700 flex items-center">
          <i className="fas fa-user-check mr-2"></i>
          Mark Attendance
        </h1>
        <div className="flex items-center gap-3">
          <img
            src="/user.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Professor</span>
        </div>
      </div>

      {/* Messages */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <i className="fas fa-exclamation-triangle mr-2"></i>
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          <i className="fas fa-check-circle mr-2"></i>
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded">
        {/* Course Selection */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">
            <i className="fas fa-book mr-1"></i>
            Select Course *
          </label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">Choose a course...</option>
            {courses.map(course => (
              <option key={course.id} value={course._id}>
                {course.courseCode} - {course.title} ({course.date})
              </option>
            ))}
          </select>
        </div>

        {/* Bulk Actions */}
        {students.length > 0 && (
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-700">Bulk Actions</label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={markAllPresent}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                <i className="fas fa-check mr-2"></i>
                Mark All Present
              </button>
              <button
                type="button"
                onClick={markAllAbsent}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                <i className="fas fa-times mr-2"></i>
                Mark All Absent
              </button>
            </div>
          </div>
        )}

        {/* Students List */}
        {students.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-purple-700 mb-4">
              Mark Attendance for {courses.find(c => c.id === selectedCourse)?.name}
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {students.map(student => (
                <div key={student.studentId._id} className="flex items-center justify-between p-4 border rounded">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.studentId._id}`}
                      alt={student.studentId.fullName}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-medium">{student.studentId.fullName}</div>
                      <div className="text-sm text-gray-600">{student.studentId.regiNumber}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {
                      <button
                        key={student.status}
                        type="button"
                        onClick={() => handleAttendanceChange(student.studentId, student.status)}
                        className={`px-3 py-1 rounded text-sm font-medium capitalize transition ${
                          getStatusColor(student.status)
                        }`}
                      >
                        {student.status}
                      </button>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Submit Button */}
        {students.length > 0 && (
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-purple-600 text-white px-8 py-3 rounded hover:bg-purple-700 transition disabled:bg-purple-400"
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Saving Attendance...
                </>
              ) : (
                <>
                  <i className="fas fa-save mr-2"></i>
                  Save Attendance
                </>
              )}
            </button>
          </div>
        )}

        {/* No Course Selected Message */}
        {!selectedCourse && (
          <div className="text-center py-12 text-gray-500">
            <i className="fas fa-book text-4xl mb-4"></i>
            <p>Please select a course to start marking attendance.</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default AttendanceMark;