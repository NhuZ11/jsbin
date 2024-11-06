import React, {useState} from "react";
import LoginNav from "./LoginNav";
import { Link, useNavigate } from "react-router-dom";




const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = credentials;

    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        }
      );

      const json = await response.json();
      console.log("Response: ", json);

      if (response.ok) {
        // Save the auth token and redirect to login
        navigate("/login");
        console.log("Success: Account created");
      } else {
        console.log("Failure: ", json.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // get user details from frontend as the value from the fields change the spread operator in credentials updates the value
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <LoginNav />
      <div className="d-flex justify-content-center mt-5">
        <div className="row flex-column border border-2 border-dark p-3">
          {/* Added padding */}
          <div className="col d-flex mb-3">
            <Link
              className=" p-2 flex-fill text-center no-underline"
              to="/register"
            >
              New to Js Bin <br /> Register
            </Link>
            <Link
              className="border border-primary p-2 flex-fill text-center no-underline"
              to="/login"
            >
              Existing Users <br /> Login
            </Link>
          </div>
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  name="username"
                  placeholder="Enter your username"
                  required // Make field required
                  value={credentials.username}
                  onChange={onChange}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required 
                  value={credentials.email}
                  onChange={onChange}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  required // Make field required
                  value={credentials.password}
                  onChange={onChange}
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
