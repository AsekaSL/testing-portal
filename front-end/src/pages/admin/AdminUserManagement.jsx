import React, { useState } from "react";

const AdminUserManagement = () => {
  const [formData, setFormData] = useState({
    lecture_id: "",
    full_name: "",
    nic: "",
    regi_num: "",
    year: "",
    contact_num: "",
    address: "",
    email: "",
    lecture_dep_id: "",
    password: "",
  });

  const [search, setSearch] = useState("");
  const [professors, setProfessors] = useState([]);

  const departments = ["CS", "SE", "IS"]; // Example departments

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add professor to list (demo only)
    setProfessors([...professors, formData]);
    setFormData({
      lecture_id: "",
      full_name: "",
      nic: "",
      regi_num: "",
      year: "",
      contact_num: "",
      address: "",
      email: "",
      lecture_dep_id: "",
      password: "",
    });
    alert("Professor added!");
  };

  const filteredProfessors = professors.filter(
    (prof) =>
      prof.full_name.toLowerCase().includes(search.toLowerCase()) ||
      prof.regi_num.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-700">Admin User Management</h1>
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
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 shadow-md rounded mb-6"
      >
        <input
          type="hidden"
          name="lecture_id"
          value={formData.lecture_id}
        />
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">NIC</label>
          <input
            type="text"
            name="nic"
            placeholder="NIC"
            value={formData.nic}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Registration Number</label>
          <input
            type="text"
            name="regi_num"
            placeholder="Registration Number"
            value={formData.regi_num}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Year</label>
          <input
            type="number"
            name="year"
            placeholder="Year"
            value={formData.year}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Contact Number</label>
          <input
            type="text"
            name="contact_num"
            placeholder="Contact Number"
            value={formData.contact_num}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Department</label>
          <select
            name="lecture_dep_id"
            value={formData.lecture_dep_id}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">Select Department</option>
            {departments.map((dep, idx) => (
              <option key={idx} value={dep}>
                {dep}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div className="col-span-2 flex gap-4 mt-2">
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
          >
            Save
          </button>
        </div>
      </form>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Professor List */}
      <div className="bg-white shadow-md rounded">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-purple-700">Professor List</h2>
        </div>
        {filteredProfessors.length > 0 ? (
          <ul className="divide-y">
            {filteredProfessors.map((prof, idx) => (
              <li key={idx} className="px-4 py-3 flex justify-between items-center">
                <div>
                  <span className="font-medium">{prof.full_name}</span>
                  <span className="text-gray-500 ml-2">({prof.regi_num})</span>
                </div>
                <div className="text-sm text-gray-600">
                  {prof.lecture_dep_id} - Year {prof.year}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="p-4 text-gray-500">No professors found</p>
        )}
      </div>
    </div>
  );
};

export default AdminUserManagement;