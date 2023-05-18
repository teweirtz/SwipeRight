import React, {useState} from 'react'
import Navigation from '../Components/Navigation'

const Register = () => {
    const handleSubmit = () => {
        console.log('submit')
    }
    const handleChange = () => {
        console.log('submit')
    }
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
                    <div className='form__container'>
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
                    </div>

                    <label>Gender</label>
                    <div className='form__container'>
                    <input
                        id="man__gender__identity"
                        type="radio"
                        name="gender__identity"
                        value="man"
                        onChange={handleChange}
                        checked={false}
                        />
                    <label htmlFor="man__gender__identity">Man</label>
                    <input
                        id="woman__gender__identity"
                        type="radio"
                        name="gender__identity"
                        value="woman"
                        onChange={handleChange}
                        checked={false}
                        />
                    <label htmlFor="woman__gender__identity">Woman</label>

                        </div>
                </section>
            </form>
        </div>
        </>
    )
}

export default Register;
