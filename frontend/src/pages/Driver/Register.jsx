import React, { useState } from 'react';
import "./Driver.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SideImage from "../../assets/images/AddDriver.jpeg"
import { API_BASE_URL } from "../../utils/constants";

function Register() {
  
  const [firstName , setFirstName] = useState('');
  const [lastName , setLastName] = useState('');
  const [address , setAddress] = useState('');
  const [phone , setPhone] = useState('');
  const [nic , setNIC] = useState('');
  const [lclass , setLClass] = useState('');
  const [lnumber , setLNumber] = useState('');
  const [expiry , setExpiry] = useState('');
  const [username , setUsername] = useState('');
  const [password , setPassword] = useState('');
  const [confirmPassword , setConfirmPassword] = useState('');
  const [image , setImage] = useState(null); // State to store the selected image file
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate
  

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!firstName || !lastName || !address || !phone || !nic || !lclass || !lnumber || !expiry || !username || !password || !confirmPassword || !image) {
      setError('Please fill out all fields');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // phone number validate
    if (phone.length !== 10) {
      setError('Mobile number should have exactly 10 digits');
      return;
    }

    // If all validations pass, proceed with form submission
    const formData = new FormData(); // Create a FormData object to send both text and file data
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('address', address);
    formData.append('phone', phone);
    formData.append('nic', nic);
    formData.append('lclass', lclass);
    formData.append('lnumber', lnumber);
    formData.append('expiry', expiry);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('image', image); // Append the selected image file

    axios.post(`${API_BASE_URL}/drivers/register`, formData)
      .then(response => {
        console.log(response.data);
        alert("Driver added successfully");
        navigate('/ViewAllDriversList')
        
      })
      .catch(error => {
        console.error('Error:', error);
      });

  
  }


  // Function to handle image selection
  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Set the selected image file to the state
  }

  

  return (
    <div className="driver-reg-page">
      <div className='side-image'>
      <img src={SideImage}/>
      </div>
      <div className='form-side'>
      <div className="driver-reg-page-title">
        <h2>Add New Driver</h2>
      </div>
      <div className="driver-reg-form">
        <div className="personal-info-section">
          <h4>Personal Information</h4>
          <div className="driver-name">
            <input className='name-input-first' id='firstName' type='text' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
            <input className='name-input-last' id='lastName' type='text' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="driver-other-details">
            <div>
              <input className='input-types' type='text' id='address' placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
              <input className='input-types' type='text' id='phone' placeholder='Contact Number' onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
              <input className='input-types' type='text' id='nic' placeholder='NIC' onChange={(e) => setNIC(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="licence-info-section">
          <h4>License Information</h4>
          <div>
            <input className='input-types' type='text' id='lclass' placeholder='License Class' onChange={(e) => setLClass(e.target.value)} />
          </div>
          <div>
            <input className='input-types' type='text' id='lnumber' placeholder='License Number' onChange={(e) => setLNumber(e.target.value)} />
          </div>
          <div>
            <input className='input-types' type='date' id='expiry' min={today} placeholder='Expiry Date' onChange={(e) => setExpiry(e.target.value)} />
          </div>
        </div>
        <div className="login-info">
          <h4>Login Information</h4>
          <div>
            <input className='input-types' type='text' id='' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <input className='input-types' type='password' id='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <input className='input-types' type='password' id='confirmPassword' placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} />
            {error && <p className="error-message">{error}</p>}
          </div>
          <div>
            <label htmlFor="image">Upload Image : </label>
            <input className='image-upload' type="file" id="image" accept=".png, .jpg, .jpeg" onChange={handleImageChange} />
          </div>
        </div>
        <div className='submit-btn'>
          <button className='btn-submit' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Register;
