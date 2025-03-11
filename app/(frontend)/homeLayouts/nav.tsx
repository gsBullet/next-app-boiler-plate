"use client";
import Link from "next/link";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  useAuth } from "@/app/authContext/authContext";
const Nav = () => {
  const { user, logout } = useAuth();

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact-us">
                  Contact
                </Link>
              </li>
              {user ? (
                <>
                  <li className="nav-item">
                    <Link href={"/dashboard"} className="nav-link ">
                      dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={logout}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" href="/login">
                      login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/signup" className="nav-link">
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
