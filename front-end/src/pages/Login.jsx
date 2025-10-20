import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(`Email : ${email} , Password : ${password}`)

  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 shadow-md rounded w-full max-w-md">
        <h1 className="text-3xl font-bold text-purple-700 text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Don't have an account? <a href="#" className="text-purple-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;