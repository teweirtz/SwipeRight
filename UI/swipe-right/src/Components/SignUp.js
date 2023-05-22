import React, { useState } from 'react'
import './SignUp.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const SignUp = ({ setShowModal, isSignUp }) => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [error, setError] = useState(null)
  const [cookies, setCookie, removeCookie] =useCookies(['user'])

  let navigate = useNavigate()

  const handleClick = () => {
    setShowModal(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (isSignUp && (password !== confirmPassword)) {
          setError('Passwords need to match!')
          return
      }

      const response = await axios.post(`http://localhost:8000/${isSignUp ? 'signup' : 'login'}`, { email, password })

      setCookie('AuthToken', response.data.token)
      setCookie('UserId', response.data.userId)

      const success = response.status === 201
      if (success && isSignUp) navigate ('/register')
      if (success && !isSignUp) navigate ('/profile')

      window.location.reload()

  } catch (error) {
      console.log(error)
  }

}

  return (
    <div className="sign__up">
        <div className="close-icon" onClick={handleClick}>ⓧ</div>
      <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp && (
          <input
            type="password"
            id="password-check"
            name="password-check"
            placeholder="confirm password"
            required={true}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <button className="signup__button" type="submit">
          Sign Up
        </button>
        <p>{error}</p>
      </form>
    </div>
  )
}

export default SignUp
