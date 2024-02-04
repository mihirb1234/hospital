import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const res = await axios.post("/api/v1/user/register", formData);
      if (res.data.success) {
        message.success("registered successfully");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };

  return (
    <>
      <div className="min-h-screen py-20 bg-gradient-to-r from-fuchsia-200 to-indigo-500">
        <div className="container mx-auto mt-20">
          <div className="lg:w-1/2 bg-white rounded-xl mx-auto shadow-lg overflow-hidden flex">
            <div className="w-1/2">
              <img
                src="https://plus.unsplash.com/premium_photo-1676325101840-a324d28fd19b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="heart"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="w-1/2 bg-pink-300">
              <h2 className="text-center mt-5 font-extrabold text-white lg:text-6xl text-2xl">
                Register
              </h2>
              <p className="text-xs text-center mt-10">Create your account.</p>

              <form action="#" onSubmit={handleSubmit}>
                <div className="sm:p-2 lg:p-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required={true}
                    onChange={handleChange}
                    value={formData.name}
                    className="w-full border-gray-500 rounded-lg mt-4 px-2 py-2 sm:py-1 md:py-2"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required={true}
                    value={formData.email}
                    className="w-full border-gray-500 rounded-lg mt-2 px-2 py-2 sm:py-1 md:py-2"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required={true}
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border-gray-500 rounded-lg mt-2 px-2 sm:py-1 py-2 md:py-2"
                  />
                  <div className="py-2">
                    <Link to="/login" className="sm:text-lg text-xs">
                      Already registered? Login
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-400 p-3 text-white ml-1 mb-3 font-bold rounded-xl shadow-lg lg:px-5 mt-10 transition-transform transform hover:scale-105"
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
