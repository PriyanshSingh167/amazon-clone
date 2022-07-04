import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Login.css";
import Button from "@mui/material/Button";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onClick = () => {
    navigate();
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
          <input type="email" value={email} onChange={onChange} id="email" />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            id="password"
            onChange={onChange}
          />
          <Button
            variant="contained"
            className="login__signInButton"
            onClick={onClick}
            type="submit"
          >
            Sign-In
          </Button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <Link to="/sign-up">
          <Button variant="contained" className="login__signInButton">
            Sign-up
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
