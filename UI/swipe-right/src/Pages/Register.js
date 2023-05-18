import React, {useState} from 'react'
import Navigation from '../Components/Navigation'

const Register = () => {
    return (
        <>
        <Navigation 
            minimal={true} 
            setShowSignUp={()=>{}} 
            showSignUp={false} 
            />
        <div className="registration">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor="first_name">First Name</label>
                    <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        required={true}
                        value={""}
                        onChange={handleChange}
                        />
                </section>
            </form>
        </div>
        </>
    )
}
