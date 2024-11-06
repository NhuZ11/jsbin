import React, { useState, useContext } from "react";
import { Context } from "../App";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirecting
import Icon from "../assets/jsbinimg.png";

const Navbar = ({ togglePanel, panels }) => {
  const { showTop, showView, user } = useContext(Context);
  const navigate = useNavigate(); // Initialize navigate hook

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); // Navigate to login page after logout
  };

  return (
    <div className="container-fluid nav-background">
      <div className="row border py-2">
        {/* Start Section */}
        <div className="col d-flex justify-content-start align-items-center gap-3">
          {showTop ? (
            <br />
          ) : (
            <p className="" onClick={showView}>
              <img src={Icon} className="nav-icon" alt="" />
            </p>
          )}
          <div className="dropdown">
            <button
              className="btn dropdown-toggle no-background"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              File
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  New
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Archive
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  My Bins
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add description
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Download
                </a>
              </li>
            </ul>
          </div>
          <p className="mb-0">Add Library</p>
          <p className="mb-0">Share</p>
        </div>

        {/* Center Section */}
        <div className="col d-flex justify-content-center align-items-center gap-3">
          <div
            className="btn-group border border-3"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className="btn"
              onClick={() => togglePanel("html")}
            >
              HTML
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => togglePanel("css")}
            >
              CSS
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => togglePanel("js")}
            >
              JavaScript
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => togglePanel("console")}
            >
              Console
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => togglePanel("output")}
            >
              Output
            </button>
          </div>
        </div>

        {/* End Section */}
        <div className="col d-flex justify-content-end align-items-center gap-3">
          {localStorage.getItem("token") ? (
            <div className="dropdown">
              <button
                className="btn dropdown-toggle no-background"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Account
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item display-6" href="#">
                    @{user.username}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Editor Setting
                  </a>
                </li>
                <li>
                  <button
                    className="dropdown-item no-underline"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link className="mb-0 button-back no-underline" to="/register">
              Login or Register
            </Link>
          )}
          <Link className="mb-0 no-underline" to="/blog">Blog</Link>
          <p className="mb-0">Help</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
