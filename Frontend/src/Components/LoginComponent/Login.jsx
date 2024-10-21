import React, { useState } from "react";
import LoginNav from "./LoginNav";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [credential, setCredential] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(""); // State to store error message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous errors
    const { email, password } = credential;
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const json = await response.json();
      console.log("this is response ", json);

      if (json.authToken) {
        // Save the auth token and redirect
        localStorage.setItem("token", json.authToken);
        navigate("/");
        console.log("Account login", "success");
      } else {
        setErrorMessage("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Login error: ", error);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <>
      <LoginNav />
      <div className="d-flex justify-content-center mt-5">
        <div className="row flex-column border border-2 border-dark p-3">
          <div className="col d-flex mb-3">
            <Link
              className="border border-primary p-2 flex-fill text-center no-underline"
              to="/register"
            >
              New to Js Bin <br /> Register
            </Link>
            <Link
              className=" p-2 flex-fill text-center no-underline"
              to="/login"
            >
              Existing Users <br /> Login
            </Link>
          </div>
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-2">
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                  onChange={handleChange}
                  value={credential.email}
                  name="email"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  required
                  name="password"
                  value={credential.password}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex justify-content-center mt-3">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
