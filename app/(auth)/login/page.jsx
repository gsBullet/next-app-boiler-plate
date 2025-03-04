"use client"
import React from "react";
import axios from "axios";
import baseURL from "@/app/url/baseUrl";
import "bootstrap/dist/css/bootstrap.min.css";
// import  { Metadata } from "next";

// export const metadata = {
//   title: "Login",
//   description: "Login",
// };

const Login = () => {
  const loginHadler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const response = await axios.post(`${baseURL}/users/login`, formData);
    if (response.status === 200) {
      window.localStorage.setItem("todoToken", response.data.token);

      console.log("Logged in successfully!");
    } else {
      console.log("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="continer mt-5">
      <main className="min-vh-100 container">
        <div className="col-lg-6 m-auto">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">login</h2>
            </div>
            <div className="card-body">
              <form onSubmit={loginHadler}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
