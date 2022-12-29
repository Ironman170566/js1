import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history("/");
        console.log(auth);
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG7.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <br />

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            placeholder="Enter your Email(example@email.com)"
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signInButton"
            onClick={SignIn}
            type="submit"
          >
            Sign In
          </button>
          <br />
        </form>
        <p>
          By continuing, you agree to Amazon FAKE Conditions of Use and Privacy
          Notice.
        </p>
        <br />
        <hr />
        <p>New to Amazon?</p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
