import React, { useState } from "react";

const ReportGeneration = () => {
  const [formData, setFormData] = useState({
    courseModule: "",
    year: "",
    semester: "",
    faculty: "",
    department: "",
    startDate: "",
    endDate: "",
    enableStudentSearch: false,
    studentId: "",
  });

  const [reportData, setReportData] = useState([]);
  const [showReport, setShowReport] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const mockData = [
        { studentId: "ST001", name: "John Doe", attendancePercent: 85, presentDays: 17, absentDays: 3 },
        { studentId: "ST002", name: "Jane Smith", attendancePercent: 92, presentDays: 18, absentDays: 2 },
        { studentId: "ST003", name: "Bob Johnson", attendancePercent: 78, presentDays: 16, absentDays: 4 },
        { studentId: "ST004", name: "Alice Brown", attendancePercent: 95, presentDays: 19, absentDays: 1 },
      ];
      setReportData(mockData);
      setShowReport(true);
      setLoading(false);
    }, 2000);
  };

  const downloadPDF = () => {
    alert("PDF download functionality would be implemented here");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-700">Report Generation</h1>
        <div className="flex items-center gap-3">
          <img
            src="/user.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Admin</span>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white p-6 shadow-md rounded mb-6"
      >
        <div>
          <label className="block mb-1 font-medium">Course Module</label>
          <select
            name="courseModule"
            value={formData.courseModule}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">Select Module</option>
            <option value="CS101">CS101 - Introduction to Programming</option>
            <option value="SE201">SE201 - Software Engineering</option>
            <option value="IS301">IS301 - Information Systems</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Year</label>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">Select Year</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Semester</label>
          <select
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">Select Semester</option>
            <option value="Fall">Fall</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Faculty</label>
          <select
            name="faculty"
            value={formData.faculty}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">Select Faculty</option>
            <option value="Engineering">Engineering</option>
            <option value="Science">Science</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Department</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">Select Department</option>
            <option value="CS">Computer Science</option>
            <option value="SE">Software Engineering</option>
            <option value="IS">Information Systems</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="enableStudentSearch"
            checked={formData.enableStudentSearch}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="font-medium">Enable Search by Student</label>
        </div>

        {formData.enableStudentSearch && (
          <div>
            <label className="block mb-1 font-medium">Student ID</label>
            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              placeholder="Enter Student ID"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        )}

        <div className="col-span-full">
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
          >
            Generate Report
          </button>
        </div>
      </form>

      {/* Loading */}
      {loading && (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      )}

      {/* Report Table */}
      {showReport && !loading && (
        <div className="bg-white shadow-md rounded mb-6">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold text-purple-700">Attendance Report</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="px-4 py-2 text-left">Student ID</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Attendance %</th>
                  <th className="px-4 py-2 text-left">Present Days</th>
                  <th className="px-4 py-2 text-left">Absent Days</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((student, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{student.studentId}</td>
                    <td className="px-4 py-2">{student.name}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded text-sm ${
                        student.attendancePercent >= 90 ? 'bg-green-100 text-green-800' :
                        student.attendancePercent >= 75 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {student.attendancePercent}%
                      </span>
                    </td>
                    <td className="px-4 py-2">{student.presentDays}</td>
                    <td className="px-4 py-2">{student.absentDays}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Download Button */}
      {showReport && !loading && (
        <div className="text-center">
          <button
            onClick={downloadPDF}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Download PDF Report
          </button>
        </div>
      )}
    </div>
  );
};

export default ReportGeneration;