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

                    <label>Birthday</label>
                    <input
                        id="dob_day"
                        type="number"
                        name="dob_day"
                        placeholder="DD"
                        required={true}
                        value={""}
                        onChange={handleChange}
                        />
                    <input
                        id="dob_month"
                        type="number"
                        name="dob_month"
                        placeholder="MM"
                        required={true}
                        value={""}
                        onChange={handleChange}
                        />
                    <input
                        id="dob_year"
                        type="number"
                        name="dob_year"
                        placeholder="YYYY"
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
