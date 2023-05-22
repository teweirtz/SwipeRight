import React, { useState } from 'react';
import Navigation from '../Components/Navigation';
import SignUp from '../Components/SignUp';
import './Main.css';
import {useCookies} from "react-cookie"

const Main = () => {
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const authToken = cookies.AuthToken

    const handleClick = () => {
        if (authToken) {
            removeCookie('UserId', cookies.UserId)
            removeCookie('AuthToken', cookies.AuthToken)
            window.location.reload()
            return
        }
        setShowModal(true)
        setIsSignUp(true)
    }

  return (
    <div className="overlay">
      <Navigation
        minimal={false}
        authToken={authToken}
        setShowModal={setShowModal}
        showModal={showModal}
        setIsSignUp={setIsSignUp}
      />
      <div className="Main">
        <h1 className="title">SwipeRightForEmployment</h1>
        <button className="primary_button" onClick={handleClick}>
          {authToken ? 'Sign out' : 'Create Account'}
        </button>
        
        {showModal && (
            <SignUp setShowModal={setShowModal} isSignUp={isSignUp}/>
        )}
      </div>
    </div>
  );
}

export default Main;
