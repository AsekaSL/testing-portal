import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../../context/AppContext";

const AdminDashboard = () => {
  // Mock data for demonstration
  const [stats, setStats]= useState([
    { title: "Total Students", value: "1,250", icon: "👥" },
    { title: "Total Professors", value: "45", icon: "👨‍🏫" },
    { title: "Today's Attendance", value: "85%", icon: "📊" },
    { title: "Active Courses", value: "32", icon: "📚" },
  ]);

  const {backendUrl} = useContext(AppContext)

  const navigationItems = [
    { path: "/students", label: "Student Management", icon: "👥" },
    { path: "/admin-professor-management", label: "Professor Management", icon: "👨‍🏫" },
    { path: "/course-unit-management", label: "Course Unit Management", icon: "📚" },
    { path: "/admin-report-generation", label: "Report Generation", icon: "📊" },
    { path: "/adminuser", label: "Admin User Management", icon: "⚙️" },
  ];

  const getDashboard = async () => {
    try {
      axios.defaults.withCredentials = true

      const {data} = await axios.get(backendUrl + '/admin/dashboard')
      
      if (data.success) {
        setStats([
          { title: "Total Students", value: data.message?.totalStudents, icon: "👥" },
          { title: "Total Professors", value: data.message?.totalProfessors, icon: "👨‍🏫" },
          { title: "Today's Attendance", value: `${data.message?.attendancePercentage}%`, icon: "📊" },
          { title: "Active Courses", value: data.message?.activeCourses, icon: "📚" }
        ])
      }else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    getDashboard()
  },[])

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-700">Admin Dashboard</h1>
        <div className="flex items-center gap-3">
          <img
            src="/user.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Admin</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded flex items-center">
            <div className="text-4xl mr-4">{stat.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">{stat.title}</h3>
              <p className="text-2xl font-bold text-purple-700">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Cards */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-purple-700 mb-4">Management Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="bg-white p-6 shadow-md rounded hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center">
                <div className="text-3xl mr-4">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.label}</h3>
                  <p className="text-sm text-gray-600">Click to manage</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 shadow-md rounded">
        <h2 className="text-xl font-bold text-purple-700 mb-4">Recent Activity</h2>
        <ul className="space-y-2">
          <li className="flex justify-between items-center py-2 border-b">
            <span>Student John Doe marked present in CS101</span>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </li>
          <li className="flex justify-between items-center py-2 border-b">
            <span>Professor Jane Smith updated attendance</span>
            <span className="text-sm text-gray-500">4 hours ago</span>
          </li>
          <li className="flex justify-between items-center py-2 border-b">
            <span>New student registered: Alice Johnson</span>
            <span className="text-sm text-gray-500">1 day ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;