import React, {useState} from 'react';
import Navigation from '../Components/Navigation';
import SignUp from '../Components/SignUp';
import './Main.css';

function Main() {
    const [showSignUp, setShowSignUp] = useState(false)
    const authToken=true
    const handleClick = () => {
        console.log('click')
        setShowSignUp(true)
    }
  return (
    <div className="overlay">
        <Navigation minimal={false} authToken={authToken} setShowSignUp={setShowSignUp} showSignUp={showSignUp}/>
            <div className="Main">
                <h1>SwipeRightForEmployment</h1>
                    <button className="primary__button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                    </button>
                    {showSignUp && (
                        <SignUp setShowSignUp={setShowSignUp}/>
                    )}
            </div>
    </div>
  )
}

export default Main;