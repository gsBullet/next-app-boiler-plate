"use client";
import React, { useContext, useEffect } from "react";
import axios from "axios";
import baseURL from "@/app/url/baseUrl";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "@/app/authContext/authContext";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  // console.log(isAuthenticated);
  

  useEffect(() => {
    if (isAuthenticated?.checkAuth) {
      router.push("/dashboard");
    } else if (isAuthenticated.checkAuth === false) {
      router.push("/login");
    } else {
    }
  }, [isAuthenticated]);

  const loginHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await axios.post(`${baseURL}/users/login`, formData);
      // console.log(response);
      

      if (response.status === 200) {
        window.localStorage.setItem("todoToken", response?.data?.token);

        setIsAuthenticated({
          checkAuth: true,
          todoToken: response?.data?.token,
        });
        // router.push("/dashboard");
        console.log("Logged in successfully!");
      } else {
        console.log("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
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
              <form onSubmit={loginHandler}>
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
