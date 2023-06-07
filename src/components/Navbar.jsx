import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase-config";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="nav_logo">Villion Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/15360894/pexels-photo-15360894/free-photo-of-woman-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>Jon</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
