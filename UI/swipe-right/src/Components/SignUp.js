import React, {useState} from 'react'
import './SignUp.css'

function SignUp() {

    const [showForm, setShowForm] = useState(false)
    const authToken = false
    const handleClick = () => {
        console.log('click')
        setShowForm(true)
    }
    return (
    <div className="sign__up">
      <h2>{isSignUp ? 'CREATE ACCOUNT': 'LOG IN'}</h2>
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
        <input className="secondary-button" type="submit"/>
        <p>{error}</p>
    </form>
</div>
)
}

export default SignUp