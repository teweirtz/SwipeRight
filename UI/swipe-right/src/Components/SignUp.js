import React, {useState} from 'react'
import './SignUp.css'

const SignUp = ({setShowSignUp, isSignUp}) => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [error, setError] = useState(null)
  console.log(email, password, confirmPassword)


const handleClick = () => {
  setShowSignUp(false)
}
const handleSubmit = (e) => {
  e.preventDefault()
  try {
    if( isSignUp && (password !== confirmPassword)) {
    setError('Passwords do not match!')
  }
  console.log('passwords do not match')
} catch (error) {
  console.log(error)
}
}
    return (
    <div className="sign__up">
      <h2>{isSignUp ? 'CREATE ACCOUNT': 'LOG IN'}</h2>
      <div className="close-icon" onClick={handleClick}>ⓧ</div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
        />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required={true}
            onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp && <input
            type="password"
            id="password-check"
            name="password-check"
            placeholder="confirm password"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
        />}
        <input className="signup__button" type="submit"/>
        <p>{error}</p>
    </form>
</div>
)
}

export default SignUp;