import React from 'react';
import { useHistory } from 'react-router-dom';
import './DashBoard.css';

function DashBoard() {
  const history = useHistory();

  const handleSignUpRedirect = () => {
    history.push("/signup");
  };

  const handleSignInRedirect = () => {
    history.push("/signin");
  };

  return (
    <div className='dashBoardContainer'>
      <div className="dashboardNav">
        <h1 className='dashboardText'>This is dashBoard</h1>
        <div className="authBtn">
          <div className="signInLink btn" onClick={handleSignInRedirect}>sign in</div>
          <div className="signUpLink btn" onClick={handleSignUpRedirect}>sign up</div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;

