import React from "react";
import LoginNav from "./LoginNav";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <LoginNav />
      <div className="d-flex justify-content-center mt-5">
        <div className="row flex-column border border-2 border-dark p-3">
          {/* Added padding */}
          <div className="col d-flex mb-3">
            <Link className=" p-2 flex-fill text-center no-underline" to="/register">
              New to Js Bin <br /> Register
            </Link>
            <Link className="border border-primary p-2 flex-fill text-center no-underline" to="/login">
              Existing Users <br /> Login
            </Link>
          </div>
          <div className="col">
            <form>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder="Enter your username"
                  required // Make field required
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required // Make field required
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  required // Make field required
                />
              </div>
              <div className="d-flex justify-content-center mt-3">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
