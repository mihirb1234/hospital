import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="min-h-screen py-20 bg-gradient-to-r from-fuchsia-200 to-indigo-500">
        <div className="container mx-auto   ">
          <div className="w-2/3 bg-white rounded-xl mx-auto shadow-lg overflow-hidden flex">
            <div className="w-1/2">
              <img
                src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="heart"
              />
            </div>
            <div className="w-1/2 bg-pink-300">
              <h2 className="text-center mt-5 font-extrabold text-white text-2xl">
                Register
              </h2>
              <p className="text-xs text-center mt-2">Create your account.</p>

              <form action="#" onSubmit={handleSubmit}>
                <div className="p-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required={true}
                    onChange={handleChange}
                    value={formData.name}
                    className="w-full border-gray-500 rounded-lg mt-4 px-2 py-2"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required={true}
                    value={formData.email}
                    className="w-full border-gray-500 rounded-lg mt-2 px-2 py-2"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required={true}
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border-gray-500 rounded-lg mt-2 px-2 py-2"
                  />
                  <div className="py-2">
                    <Link to="/login">Already registered? Login</Link>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-400 p-3 text-white font-bold rounded-xl shadow-lg px-5 mt-10 transition-transform transform hover:scale-105"
                  >
                    REGISTER
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
