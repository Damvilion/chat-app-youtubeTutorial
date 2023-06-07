import React from "react";
import "./Register.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const Login = () => {
  const [err, setErr] = useState(false);
  const [errMes, setErrMes] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
      setErrMes(err.message);
    }
  };
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Villion Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit} action="">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <button type="submit">Sign in</button>
          {err && <p>{errMes}</p>}
        </form>
        <p>
          You do have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
