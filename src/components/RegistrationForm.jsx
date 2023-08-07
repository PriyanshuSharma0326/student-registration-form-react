import React, { useState } from 'react';
import '../styles/RegistrationForm.css';

function RegistrationForm() {
    const [formInputs, setFormInputs] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        age: '',
        dob: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        address: '',
        state: '',
        pincode: '',
        // hobbies: [],
    });

    const handleChange = (e) => {
        e.preventDefault();
        
        setFormInputs({
            ...formInputs,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className='wrapper'>
            <h1 className='form-title'>student registration form</h1>

            <form action="" className='registration-form'>
                <section>
                    <label htmlFor="first-name">First Name</label>
                    <input 
                        id='first-name' 
                        type="text" 
                        placeholder='Enter First Name' 
                        name='firstName' 
                        value={formInputs.firstName} 
                        onChange={handleChange} 
                    />
                </section>

                <section>
                    <label htmlFor="last-name">Last Name</label>
                    <input 
                        id='last-name' 
                        type="text" 
                        placeholder='Enter First Name' 
                        name='lastName' 
                        value={formInputs.lastName} 
                        onChange={handleChange} 
                        />
                </section>

                <section>
                    <label>Gender</label>

                    <div className="form-radio-inputs">
                        <span>
                            <label htmlFor="male">
                                <input 
                                    id="male" 
                                    type="radio" 
                                    name="gender" 
                                    value='male' 
                                    checked={formInputs.gender === 'male'} 
                                    onChange={handleChange} 
                                />
                                Male
                            </label>
                        </span>

                        <span>
                            <label htmlFor="female">
                                <input 
                                    id="female"
                                    type="radio" 
                                    name="gender" 
                                    value='female' 
                                    checked={formInputs.gender === 'female'} 
                                    onChange={handleChange} 
                                />
                                Female
                            </label>
                        </span>
                    </div>
                </section>

                <section>
                    <label htmlFor="age">Age</label>
                    <input 
                        id='age' 
                        type="number" 
                        placeholder='Enter your age' 
                        name='age' 
                        value={formInputs.age} 
                        onChange={handleChange} 
                    />
                </section>

                <section>
                    <label htmlFor="dob">Date of Birth</label>
                    <input 
                        id='dob' 
                        type="date" 
                        name='dob' 
                        value={formInputs.dob} 
                        onChange={handleChange} 
                    />
                </section>

                <section>
                    <label htmlFor="email">Email Address</label>
                    <input 
                        id='email' 
                        type='email' 
                        placeholder='Enter your email' 
                        name='email' 
                        value={formInputs.email} 
                        onChange={handleChange} 
                    />
                </section>

                <section>
                    <label htmlFor="password">Password</label>
                    <input 
                        id='password' 
                        type='password' 
                        placeholder='Enter your password min 8 characters' 
                        name='password' 
                        value={formInputs.password} 
                        onChange={handleChange} 
                    />
                </section>

                <section>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input 
                        id='confirm-password' 
                        type='password' 
                        placeholder='Confirm password' 
                        name='confirmPassword' 
                        value={formInputs.confirmPassword} 
                        onChange={handleChange} 
                    />
                </section>

                <section>
                    <label htmlFor="phone-number">Phone Number</label>
                    <input 
                        id='phone-number' 
                        type='tel' 
                        placeholder='Enter your phone number' 
                        name='phone' 
                        value={formInputs.phone} 
                        onChange={handleChange} 
                    />
                </section>

                <section>
                    <label htmlFor="address">Address</label>
                    <input 
                        id='address' 
                        type="text" 
                        placeholder='Enter your address' 
                        name='address' 
                        value={formInputs.address} 
                        onChange={handleChange} 
                    />
                </section>

                <section>
                    <label>State</label>
                    <select 
                        name="state" 
                        className='state-option'
                        value={formInputs.state} 
                        onChange={handleChange} 
                    >
                        <option value="">--Select a state--</option>
                        <option value="arunachal">Arunachal Pradesh</option>
                        <option value="delhi">Delhi</option>
                        <option value="karnataka">Karnataka</option>
                    </select>
                </section>

                <section>
                    <label htmlFor="pincode">Pin Code</label>
                    <input 
                        id='pincode' 
                        type="number" 
                        placeholder='Enter your age' 
                        name='pincode' 
                        value={formInputs.pincode} 
                        onChange={handleChange} 
                    />
                </section>

                {/* <section>
                    <label>Hobbies</label>

                    <div className="form-checkbox-inputs">
                        <span>
                            <label htmlFor="music">
                                <input 
                                    id="music" 
                                    type="checkbox" 
                                    name="hobbies" 
                                    value='music' 
                                    checked={formInputs.hobbies.includes('music')} 
                                    onChange={handleChange}
                                />
                                Music
                            </label>
                        </span>

                        <span>
                            <label htmlFor="movies">
                                <input 
                                    id="movies" 
                                    type="checkbox" 
                                    name="hobbies" 
                                    value='movies' 
                                    checked={formInputs.hobbies.includes('movies')} 
                                    onChange={handleChange}
                                />
                                Movies
                            </label>
                        </span>

                        <span>
                            <label htmlFor="sports">
                                <input 
                                    id="sports" 
                                    type="checkbox" 
                                    name="hobbies" 
                                    value='sports' 
                                    checked={formInputs.hobbies.includes('sports')} 
                                    onChange={handleChange}
                                />
                                Sports
                            </label>
                        </span>

                        <span>
                            <label htmlFor="travel">
                                <input 
                                    id="travel" 
                                    type="checkbox" 
                                    name="hobbies" 
                                    value='travel' 
                                    checked={formInputs.hobbies.includes('travel')} 
                                    onChange={handleChange}
                                />
                                Travel
                            </label>
                        </span>
                    </div>
                </section> */}

                <section>
                    <label htmlFor="image">Upload Image</label>
                    <input className='image-input' id='image' type='file' placeholder='Enter your age' />
                </section>

                <span className='confirmation'>
                    <input type="checkbox" />
                    <h2>
                        I hereby declare that the above information provided is true and correct.
                    </h2>
                </span>

                <section className='buttons-container'>
                    <button className="register">
                        Register
                    </button>

                    <button className="reset">
                        Reset
                    </button>
                </section>
            </form>
        </div>
    );
}

export default RegistrationForm;
