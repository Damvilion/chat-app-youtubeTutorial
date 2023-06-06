import React, { useState } from "react";
import "./Register.css";
import add from "../images/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase-config";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [err, setErr] = useState(false);
  const [errMes, setErrMes] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytes(storageRef, file);

      uploadTask.then((snapshot) => {
        getDownloadURL(snapshot.ref).then(async (downloadURL) => {
          await updateProfile(res.user, {
            displayName: displayName,
            photoURL: downloadURL,
          });

          console.log(downloadURL);

          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName: displayName,
            email: email,
            photoURL: downloadURL,
          });
        });
      });
    } catch (err) {
      setErr(true);
      setErrMes(err.message);
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Villion Chat</span>
        <span className="title">Register</span>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <label htmlFor="file">
            <img src={add} alt="" />
            <span>Add an avatar</span>
          </label>
          <input style={{ display: "none" }} type="file" id="file" />
          <button>Sign up</button>
          {err ? <p>{errMes}</p> : <p></p>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
