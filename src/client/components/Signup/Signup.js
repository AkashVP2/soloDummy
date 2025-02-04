import React, { useState } from "react";
import CustomButton from "../CustomButtom/CustomButton" 
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Signup.css"; // Import the CSS styles for the SignUp form

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const history = useHistory();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleAgreeTermsChange = (e) => setAgreeTerms(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    console.log("Sign Up submitted", { email, password, agreeTerms });
  };

  const handleSignInRedirect = () => {
    history.push("/signin");
  };
  

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div className="logo">Solo</div>

      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="name-fields">
          <input
            type="text"
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className="password-fields">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>

        <div className="terms">
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={handleAgreeTermsChange}
          />
          <span>I agree to the</span>
          <span className="terms-link"> Terms & Conditions</span>
        </div>

        
        <CustomButton text="Sign Up" filled={true} primary={true} name="Signup"  type="submit" />

        <div className="signin-text">
          Already have an account? <span className="signin-link" onClick={handleSignInRedirect} >Sign In</span>
        </div>

        <div className="social-login">
          <button className="google-btn">G</button>
          <button className="linkedin-btn">Ln</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;


