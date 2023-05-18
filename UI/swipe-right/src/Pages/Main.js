import React, {useState} from 'react';
import Navigation from '../Components/Navigation';
import SignUp from '../Components/SignUp';
import './Main.css';

function Main() {
    const [showSignUp, setShowSignUp] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)
    const authToken=true
    const handleClick = () => {
        console.log('click')
        setShowSignUp(true)
        setIsSignUp(true)
    }
  return (
    <div className="overlay">
        <Navigation minimal={false} authToken={authToken} setShowSignUp={setShowSignUp} showSignUp={showSignUp} setIsSignUp={setIsSignUp}/>
            <div className="Main">
                <h1 className="title">SwipeRightForEmployment</h1>
                    <button className="primary__button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                    </button>
                    {showSignUp && (
                        <SignUp setIsSignUp={setIsSignUp} isSignUp={isSignUp}/>
                    )}
            </div>
    </div>
  )
}

export default Main;