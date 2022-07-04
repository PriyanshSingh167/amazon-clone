import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Login.css";
import Button from "@mui/material/Button";
function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { email, password, name } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-Up</h1>
        <form action="">
          <h5>Name</h5>
          <input
            type="text"
            className="nameInput"
            id="name"
            value={name}
            onChange={onChange}
          />
          <h5>E-mail</h5>
          <input type="email" value={email} onChange={onChange} id="email" />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            id="password"
            onChange={onChange}
          />
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <Link to="/sign-up">
          <Button
            variant="contained"
            className="login__signInButton"
            // onClick={signUp}
          >
            Sign-up
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
