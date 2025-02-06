import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"; 
import { signInRequest } from "../../store/authSlice";
import CustomButton from "../CustomButtom/CustomButton"; 
import "./SignIn.css"; 

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory(); 

  const { user, loading, error } = useSelector((state) => state.auth); //Get auth state

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Sign-in:", { email, password });
    dispatch(signInRequest({ email, password }));
  };

  const handleSignUpRedirect = () => {
    history.push("/signup");
  };

  useEffect(() => {
    if (user) {
      history.push("/home");
    }
  }, [user, history]);

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <div className="logo">Solo</div>

      <form className="signin-form" onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className="input-field">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            autoComplete="current-password"
            onChange={handlePasswordChange}
            required
          />
        </div>

        <CustomButton
          text={loading ? "Loading..." : "Sign In"}
          type="submit"
          filled={true}
          primary={true}
          name="Sign In"
          disabled={loading}
        />

        {error && <div className="error-message">{error}</div>}

        <div className="signup-text">
          or <span className="signup-link" onClick={handleSignUpRedirect}>Sign Up</span>
        </div>

        <div className="social-login">
          <button className="google-btn">G</button>
          <button className="linkedin-btn">Ln</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;


