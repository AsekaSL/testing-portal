import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../../context/AppContext";

const CreateQrSession = () => {
  const [formData, setFormData] = useState({
    courseId: "",
    lectureTitle: "",
    qrValidTime: "",
    date: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const {backendUrl} = useContext(AppContext)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      axios.defaults.withCredentials = true

      const {data} = await axios.post(backendUrl + '/session/add', {
        courseId: formData.courseId,
        title: formData.lectureTitle,
        date: formData.date,
        validTime: formData.qrValidTime * 60 * 1000 // To milisecond
      })
      
      if (data.success) {
        toast.success(data.message)

        navigate("/generated-qr", {
          state: {
            sessionData: formData,
            qrCode: "sample-qr-code-data", // In real app, this would be generated,
            sessionId: data.sessionId
          }
        });

      }else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }

  };

  const getCourses = async () => {
    try {
      
      const {data} = await axios.get(backendUrl + '/course/get-prof')

      if(data.success) {
        setCourses(data.message)
      }else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleStillInSession = async () => {
    try {
      
      axios.defaults.withCredentials = true

      const {data} = await axios.get(backendUrl + '/session/get-active-session')

      if(data.success) {
        console.log(data.message)
        const session = data.message

        const newFormData = {
          courseId: session.courseId._id,
          lectureTitle: session.title,
          qrValidTime:
            Math.floor((session.validTimeExpireAt - Date.now()) / (1000 * 60)) < 0
              ? 0
              : Math.floor((session.validTimeExpireAt - Date.now()) / (1000 * 60)),
          date: session.date,
        };

        if(newFormData) {
          navigate("/generated-qr", {
          state: {
            sessionData: newFormData,
            qrCode: "sample-qr-code-data", // In real app, this would be generated,
            sessionId: session._id
          }
        });
        }
        
        
      }else {
        console.log(data.message)
      }

    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  useEffect(() => {
    handleStillInSession()
    getCourses()
  }, [])
  
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-700">Create New Attendance Session</h1>
        <div className="flex items-center gap-3">
          <img
            src="/user.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Professor</span>
        </div>
      </div>

      {/* Session Creation Form */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 shadow-md rounded">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Session Details</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Course Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Name
              </label>
              <select
                name="courseId"
                value={formData.courseId}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Select Course</option>
                {courses.map(course => (
                  <option key={course.code} value={course._id}>
                    {course.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Lecture Title and QR Valid Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lecture Title
                </label>
                <input
                  type="text"
                  name="lectureTitle"
                  value={formData.lectureTitle}
                  onChange={handleChange}
                  placeholder="Enter Lecture Title"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  QR Valid Time (minutes)
                </label>
                <input
                  type="number"
                  name="qrValidTime"
                  value={formData.qrValidTime}
                  onChange={handleChange}
                  placeholder="15"
                  min="1"
                  max="120"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {/* Generate Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <i className="fas fa-spinner fa-spin"></i>
                    Generating...
                  </div>
                ) : (
                  "Generate QR Code"
                )}
              </button>
              <button
                type="button"
                onClick={() => navigate("/professor")}
                className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 p-6 rounded mt-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Instructions</h3>
          <ul className="text-blue-700 space-y-1">
            <li>• Select the course for which you want to create an attendance session</li>
            <li>• Enter a descriptive lecture title</li>
            <li>• Set how long the QR code should remain valid (in minutes)</li>
            <li>• Choose the date for the session</li>
            <li>• Click "Generate QR Code" to create the attendance session</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreateQrSession;