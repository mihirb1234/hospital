// import Link from "antd/es/typography/Link";
import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  // const handleSubmit=()=>{}
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
      const res = await axios.post("/api/v1/user/login", formData);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Logged in successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("somthing went wrong");
    }
  };
  return (
    <>
      <div className="h-screen py-20 bg-gradient-to-r from-fuchsia-200 to-indigo-500">
        <div className="container mx-auto my-20 ">
          <div className="w-2/3 mt-10   bg-white rounded-xl mx-auto shadow-lg overflow-hidden flex justify-center items-center">
            <div className="bg-white">
              <h2 className="text-3xl text-center mt-10">Login</h2>
              <p className="mt-4 text-center">Enter your details here</p>
              <form action="#" onSubmit={handleSubmit}>
                <div className="p-3 flex flex-col gap-3 mt-3 justify-center items-center mb-10  ">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                    value={formData.email}
                    className="w-full  border-2 border-blue-700 rounded-lg px-2 py-2"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={handleChange}
                    value={formData.password}
                    className="w-full border-gray-900 border-2 rounded-lg px-2 py-2 "
                  />
                  {/* <Link>Dont have an account? Create Account</Link> */}
                  <a href="/register"> dont have account</a>
                  <button
                    type="submit"
                    className="bg-blue-400 p-3 text-white font-bold rounded-xl shadow-lg px-5 mt-3 transition-transform transform hover:scale-105"
                  >
                    Login
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

export default Login;
