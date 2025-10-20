import React, { useState } from "react";

export default function CourseManagement() {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({ code: "", name: "", credits: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedCourses = [...courses];
      updatedCourses[editIndex] = formData;
      setCourses(updatedCourses);
      setEditIndex(null);
    } else {
      setCourses([...courses, formData]);
    }

    setFormData({ code: "", name: "", credits: "" });
  };

  const handleEdit = (index) => {
    setFormData(courses[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      const updatedCourses = courses.filter((_, i) => i !== index);
      setCourses(updatedCourses);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-700">Course Unit Management</h1>
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
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <input
          type="text"
          name="code"
          placeholder="Course Code (e.g., CS101)"
          value={formData.code}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          name="name"
          placeholder="Course Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="number"
          name="credits"
          placeholder="Credits"
          value={formData.credits}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition col-span-3 md:col-span-1"
        >
          {editIndex !== null ? "Update Course" : "Add Course"}
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full border-collapse">
          <thead className="bg-purple-100">
            <tr>
              <th className="px-4 py-2 border">Code</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Credits</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{course.code}</td>
                <td className="px-4 py-2 border">{course.name}</td>
                <td className="px-4 py-2 border">{course.credits}</td>
                <td className="px-4 py-2 border space-x-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {courses.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No courses added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
