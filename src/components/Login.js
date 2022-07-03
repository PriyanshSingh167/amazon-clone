import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import Button from "@mui/material/Button";
function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const signIn = (e) => {
    e.preventDefault();
  };
  const signUp = (e) => {
    e.preventDefault();
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
        <h1>Sign-In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            className="x"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            variant="contained"
            className="login__signInButton"
            onClick={signIn}
            type="submit"
          >
            Sign-In
          </Button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <Button
          variant="contained"
          className="login__signInButton"
          onClick={signUp}
        >
          Sign-up
        </Button>
      </div>
    </div>
  );
}

export default Login;
