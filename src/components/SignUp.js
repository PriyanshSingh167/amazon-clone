import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify'
import Button from "@mui/material/Button";
import "../styles/Login.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { db } from "../firebase.config";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: name,
      });

      // const formDataCopy = { ...formData }
      // delete formDataCopy.password
      // formDataCopy.timestamp = serverTimestamp()

      // await setDoc(doc(db, 'users', user.uid), formDataCopy)

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login">
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="amazon logo"
          />
        </Link>
        <div className="login__container">
          <form onSubmit={onSubmit}>
            <h1>Sign-Up</h1>
            <h5>Name</h5>
            <input
              type="text"
              className="nameInput"
              placeholder="Name"
              id="name"
              value={name}
              onChange={onChange}
            />
            <h5>Email</h5>
            <input
              type="email"
              className="emailInput"
              placeholder="Email"
              id="email"
              value={email}
              onChange={onChange}
            />
            <h5>Password</h5>
            <input
              type="password"
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />

            <button className="login__signInButton">Sign-Up</button>
          </form>

          <Link to="/login" className="registerLink">
            Sign In Instead
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignUp;
