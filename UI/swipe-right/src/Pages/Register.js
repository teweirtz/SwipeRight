import React, {useState} from 'react'
import Navigation from '../Components/Navigation'
import './Register.css'

const Register = () => {
    const [registrationData, setRegistrationData] = useState({
        user_id: "",
        first_name: "",
        dob_day: "",
        dob_month:"",
        gender_identity: "",
        gender_interest: "",
        email: "",
        url: "",
        about: "",
        matches: []
    })
    const handleSubmit = () => {
        console.log('submit')
    }
    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.value
        const name = e.target.name
        console.log('value' + value, 'name' + name)

        setRegistrationData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    console.log(registrationData)
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
                        value={registrationData.first_name}
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
                        value={registrationData.dob_day}
                        onChange={handleChange}
                        />
                    <input
                        id="dob_month"
                        type="number"
                        name="dob_month"
                        placeholder="MM"
                        required={true}
                        value={registrationData.dob_month}
                        onChange={handleChange}
                        />
                    <input
                        id="dob_year"
                        type="number"
                        name="dob_year"
                        placeholder="YYYY"
                        required={true}
                        value={registrationData.dob_year}
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
                        checked={registrationData.gender_identity === "man"}
                        />
                    <label htmlFor="man__gender__identity">Man</label>
                    <input
                        id="woman__gender__identity"
                        type="radio"
                        name="gender__identity"
                        value="woman"
                        onChange={handleChange}
                        checked={registrationData.gender_identity === "woman"}
                        />
                    <label htmlFor="woman__gender__identity">Woman</label>
                    </div>

                    <label>Show Me</label>
                    <div className='form__container'>
                    <input
                        id="man__gender__interest"
                        type="radio"
                        name="gender__interest"
                        value="man"
                        onChange={handleChange}
                        checked={registrationData.gender_interest === 'man'}
                        />
                    <label htmlFor="man__gender__interest">Man</label>
                    <input
                        id="woman__gender__interest"
                        type="radio"
                        name="gender__interest"
                        value="woman"
                        onChange={handleChange}
                        checked={registrationData.gender_interest === 'woman'}
                        />
                    <label htmlFor="woman__gender__interest">Woman</label>
                    </div>

                    <label htmlFor="about">About</label>
                    <input 
                        id="about"
                        type="text"
                        name="about"
                        required={true}
                        placeholder="I like..."
                        value={registrationData.about}
                        onChange={handleChange}
                        />
                        <input type="submit"/>
                </section>
                <section>
                <label htmlFor="about">Profile Photo</label>
                    <input
                    type="url"
                    name="url"
                    id="url"
                    onChange={handleChange}
                    required={true}
                    />
                    <div className='photo__container'>
                        <img src={registrationData.url} alt="preview"/>
                    </div>
                </section>
            </form>
        </div>
        </>
    )
}

export default Register;
