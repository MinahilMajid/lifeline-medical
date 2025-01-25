import React, { useState } from "react";
import "./Login.css";
const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };
  return (
    <form className="login-form" onSubmit={onSubmitHandler}>
      <div className="form-container">
        <p className="form-title">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p className="form-subtitle">
          {state === "Sign Up" ? "Create Account" : "Log in"} to book
          appointment
        </p>
        {state === "Sign Up" && (
          <div className="form-group">
            <p className="form-label">Full Name</p>
            <input
              className="form-input"
              type="text "
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="form-group">
          <p className="form-label">Email</p>
          <input
            className="form-input"
            type="email "
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="form-group">
          <p className="form-label">Password</p>
          <input
            className="form-input"
            type="password "
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button className="form-button">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p className="form-footer">
            Already have an account?{" "}
            <span className="form-link" onClick={() => setState("Login")}>
              {" "}
              Login here
            </span>
          </p>
        ) : (
          <p className="form-footer">
            Create an new account?{" "}
            <span className="form-link" onClick={() => setState("Sign Up")}>
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
