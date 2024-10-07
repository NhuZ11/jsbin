import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="row border py-2">
        {/* Start Section */}
        <div className="col d-flex justify-content-start align-items-center gap-3">
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
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <p className="mb-0">Add Library</p>
          <p className="mb-0">Share</p>
        </div>

        {/* Center Section */}
        <div className="col d-flex justify-content-center align-items-center gap-3">
          <div className="btn-group border " role="group" aria-label="Basic example">
            <button type="button" className="btn ">
              HTML
            </button>
            <button type="button" className="btn ">
              CSS
            </button>
            <button type="button" className="btn ">
              JavaScript
            </button>
            <button type="button" className="btn ">
              Console
            </button>
            <button type="button" className="btn ">
              Output
            </button>
          </div>
        </div>

        {/* End Section */}
        <div className="col d-flex justify-content-end align-items-center gap-3">
          <p className="mb-0 button-back ">Login or Register</p>
          <p className="mb-0">Blog</p>
          <p className="mb-0">Help</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
