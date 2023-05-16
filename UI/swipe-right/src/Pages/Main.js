import React from 'react';
import Navigation from '../Components/Navigation';
import './Main.css';

function Main() {
    const authToken=true
    const handleClick = () => {
        console.log('click')
    }
  return (
    <div className="Main">
        <h1>SwipeRightForEmployment</h1>
        <button className="primary__button" onClick={handleClick}>
            {authToken ? 'Signout' : 'Create Account'}
        </button>
    </div>
  )
}

export default Main;