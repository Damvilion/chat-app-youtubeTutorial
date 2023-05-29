import React from "react";
import "./Register.css";

const Login = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Villion Chat</span>
        <span className="title">Login</span>
        <form action="">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <button>Sign in</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Login;
