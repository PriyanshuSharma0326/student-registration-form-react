import React, { useState } from 'react';
import '../styles/RegistrationForm.css';
import indianStates from '../constants/states';
import { validateEmail, validatePassword, validatePhoneNumber } from '../utils/util';

function RegistrationForm() {
    const defaultInputs = {
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
        hobbies: [],
        image: ''
    }

    const defaultErrors = {
        firstName: '',
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
    }

    const [formInputs, setFormInputs] = useState(defaultInputs);

    const [confirm, setConfirm] = useState(false);

    const [submit, setSubmit] = useState(false);

    const [errors, setErrors] = useState(defaultErrors);

    const resetForm = (e) => {
        e.preventDefault();
        setFormInputs(defaultInputs);
        setConfirm(false);
        setSubmit(false);
        setErrors(defaultErrors);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        if(name === 'hobbies') {
            const updatedHobbies = formInputs.hobbies.includes(value)
        ? formInputs.hobbies.filter((hobby) => hobby !== value)
        : [...formInputs.hobbies, value];

            setFormInputs({
                ...formInputs,
                hobbies: updatedHobbies
            })
        }
        else {
            setFormInputs({
                ...formInputs,
                [name]: value,
            });
        }
    }

    const handleUpload = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (file.size > 100000) {
            alert("The image file is too large. The maximum file size is 100KB.");
            return;
        }
        setFormInputs({
            ...formInputs,
            image: file,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};

        if(!formInputs.firstName.trim()) {
            validationErrors.firstName = 'First Name is required';
        }

        if(!formInputs.gender.trim()) {
            validationErrors.gender = 'Gender is required';
        }

        if(!formInputs.age.trim()) {
            validationErrors.age = 'Age is required';
        }

        if(!formInputs.dob.trim()) {
            validationErrors.dob = 'DOB is required';
        }

        if(!formInputs.email.trim()) {
            validationErrors.email = 'Email is required';
        }
        else if(!validateEmail(formInputs.email.trim())) {
            validationErrors.email = 'Email is wrongly formatted';
        }

        if(!formInputs.password.trim()) {
            validationErrors.password = 'Password is required';
        }
        else if(!validatePassword(formInputs.password.trim())) {
            validationErrors.password = 'Must contain at least one number and one uppercase and lowercase character, and at least 8 or more characters';
        }

        if(!formInputs.confirmPassword.trim()) {
            validationErrors.confirmPassword = 'Password is required';
        }
        else if(formInputs.password.trim() !== formInputs.confirmPassword.trim()) {
            validationErrors.confirmPassword = `Password doesn't match`;
        }

        if(!formInputs.phone.trim()) {
            validationErrors.phone = 'Phone number is required';
        }
        else if(!validatePhoneNumber(formInputs.phone.trim())) {
            validationErrors.phone = 'Phone number is wrongly formatted';
        }

        if(!formInputs.address.trim()) {
            validationErrors.address = 'Address is required';
        }

        if(!formInputs.state.trim()) {
            validationErrors.state = 'State is required';
        }

        if(!formInputs.pincode.trim()) {
            validationErrors.pincode = 'Pin code is required';
        }

        if(Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        if(Object.keys(validationErrors).length === 0 && confirm) {
            setErrors(defaultErrors);
            setSubmit(true);
        }
    }

    return (
        <div className='wrapper'>
            <h1 className='form-title'>student registration form</h1>

            <form action="" className='registration-form'>
                <div className="form-group">
                    <section>
                        <label htmlFor="first-name">First Name<span>*</span></label>
                        <input 
                            id='first-name' 
                            type="text" 
                            placeholder='Enter First Name' 
                            name='firstName' 
                            value={formInputs.firstName} 
                            onChange={handleChange}
                        />
                    </section>

                    {errors.firstName && <p className="error">{errors.firstName}</p>}
                </div>

                <div className="form-group">
                    <section>
                        <label htmlFor="last-name">Last Name</label>
                        <input 
                            id='last-name' 
                            type="text" 
                            placeholder='Enter Last Name' 
                            name='lastName' 
                            value={formInputs.lastName} 
                            onChange={handleChange} 
                            />
                    </section>
                </div>

                <div className="form-group">
                    <section>
                        <label>Gender<span>*</span></label>

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

                    {errors.gender && <p className="error">{errors.gender}</p>}
                </div>

                <div className="form-group">
                    <section>
                        <label htmlFor="age">Age<span>*</span></label>
                        <input 
                            id='age' 
                            type="number" 
                            placeholder='Enter your age' 
                            name='age' 
                            value={formInputs.age} 
                            onChange={handleChange} 
                        />
                    </section>

                    {errors.age && <p className="error">{errors.age}</p>}
                </div>

                <div className="form-group">
                    <section>
                        <label htmlFor="dob">Date of Birth<span>*</span></label>
                        <input 
                            id='dob' 
                            type="date" 
                            name='dob' 
                            value={formInputs.dob} 
                            onChange={handleChange} 
                        />
                    </section>

                    {errors.dob && <p className="error">{errors.dob}</p>}
                </div>

                <div className="form-group">
                    <section>
                        <label htmlFor="email">Email Address<span>*</span></label>
                        <input 
                            id='email' 
                            type='email' 
                            placeholder='Enter your email' 
                            name='email' 
                            value={formInputs.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </section>

                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div className="form-group">
                    <section>
                        <label htmlFor="password">Password<span>*</span></label>
                        <input 
                            id='password' 
                            type='password' 
                            placeholder='Enter your password min 8 characters' 
                            name='password' 
                            value={formInputs.password} 
                            onChange={handleChange} 
                        />
                    </section>

                    {errors.password && <p className="error">{errors.password}</p>}
                </div>

                <div className="form-group">
                    <section>
                        <label htmlFor="confirm-password">Confirm Password<span>*</span></label>
                        <input 
                            id='confirm-password' 
                            type='password' 
                            placeholder='Confirm password' 
                            name='confirmPassword' 
                            value={formInputs.confirmPassword} 
                            onChange={handleChange} 
                        />
                    </section>

                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                </div>

                <div className="form-group">
                    <section>
                        <label htmlFor="phone-number">Phone Number<span>*</span></label>
                        <input 
                            id='phone-number' 
                            type='tel' 
                            placeholder='Enter your phone number' 
                            name='phone' 
                            value={formInputs.phone} 
                            onChange={handleChange} 
                        />
                    </section>

                    {errors.phone && <p className="error">{errors.phone}</p>}
                </div>

                <div className="form-group">
                    <section>
                        <label htmlFor="address">Address<span>*</span></label>
                        <input 
                            id='address' 
                            type="text" 
                            placeholder='Enter your address' 
                            name='address' 
                            value={formInputs.address} 
                            onChange={handleChange} 
                        />
                    </section>

                    {errors.address && <p className="error">{errors.address}</p>}
                </div>

                <div className="form-group">
                    <section>
                        <label>State<span>*</span></label>
                        <select 
                            name="state" 
                            className='state-option'
                            value={formInputs.state} 
                            onChange={handleChange} 
                        >
                            <option value="">--Select a state--</option>
                            {indianStates.map(indianState => {
                                return (
                                    <option 
                                        key={indianState.id}
                                        value={indianState.value} 
                                    >
                                        {indianState.label}
                                    </option>
                                )
                            })}
                        </select>
                    </section>

                    {errors.state && <p className="error">{errors.state}</p>}
                </div>

                <div className="form-group">
                    <section>
                        <label htmlFor="pincode">Pin Code<span>*</span></label>
                        <input 
                            id='pincode' 
                            type="number" 
                            placeholder='Enter your pin code' 
                            name='pincode' 
                            value={formInputs.pincode} 
                            onChange={handleChange} 
                        />
                    </section>

                    {errors.pincode && <p className="error">{errors.pincode}</p>}
                </div>

                <section>
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
                    </section>

                <div className="form-group">
                    <section>
                        <label htmlFor="image">Upload Image</label>
                        <input 
                            className='image-input' 
                            id='image' 
                            type='file' 
                            name='image' 
                            accept='image/*' 
                            onChange={handleUpload} 
                        />
                    </section>
                </div>

                <span className='confirmation'>
                    <input 
                        type="checkbox" 
                        checked={confirm} 
                        onChange={() => setConfirm(!confirm)} 
                    />
                    <h2>
                        I hereby declare that the above information provided is true and correct.<span>*</span>
                    </h2>
                </span>

                <section className='buttons-container'>
                    <button className="register" onClick={handleSubmit}>
                        Register
                    </button>

                    <button className="reset" onClick={resetForm}>
                        Reset
                    </button>
                </section>

                {submit && <p className="error">Form Submitted!</p>}
            </form>
        </div>
    );
}

export default RegistrationForm;
