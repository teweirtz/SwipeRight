import React from 'react'

function Main() {
    const authToken=true
    const handleClick = () => {
        console.log('click')
    }
  return (
    <div className="Main">
    <button classname="signUpButton" onClick={handleClick}>
        {authToken ? 'Signout' : 'Create Account'}
    </button>
    </div>
  )
}

export default Main;