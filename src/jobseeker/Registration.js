import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';


export default function Registration() {
  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    dateofbirth: '',
    email: '',
    password: '',
    location: '',
    contact: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    let errorMessage = '';

    if (id === 'email' && value.trim() !== '') {
      // Email format validation
      const emailRegex = /^[a-zA-Z0-9]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errorMessage = 'Please enter a valid email address';
      }
    }

    setFormData({ ...formData, [id]: value });
    setError(errorMessage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/insertjobseeker`, formData);
      if (response.status === 200) {
        setFormData({
          fullname: '',
          gender: '',
          dateofbirth: '',
          email: '',
          password: '',
          location: '',
          contact: ''
        });
      }
      setMessage(response.data);
      setError('');
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };

  const handleReset = () => {
    setFormData({
      fullname: '',
      gender: '',
      dateofbirth: '',
      email: '',
      password: '',
      location: '',
      contact: ''
    });
    setError('');
    setMessage('');
  };

  return (
    <div style={styles.registrationContainer}>
      <div style={styles.registrationBox}>
        <h3 align="center"><u>Job Seeker Registration</u></h3>
        {
          message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
        }

        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name</label>
            <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} required />
          </div>
          <div>
            <label>Gender</label>
            <select id="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div>
            <label>Date of Birth</label>
            <input type="date" id="dateofbirth" value={formData.dateofbirth} onChange={handleChange} required />
          </div>
          <div>
            <label>Email</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} required />
            {error && <span style={styles.error}>{error}</span>}
          </div>
          <div>
            <label>Password</label>
            <input type="password" id="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div>
            <label>Location</label>
            <input type="text" id="location" value={formData.location} onChange={handleChange} required />
          </div>
          <div>
            <label>Contact</label>
            <input type="number" id="contact" value={formData.contact} onChange={handleChange} required />
          </div>
          <div>
            <button type="submit" style={styles.button}>Register</button>
            <button type="button" onClick={handleReset} style={styles.button}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  registrationContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registrationBox: {
    width: '400px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#4ab5ea61', // Box background color
  },
  button: {
    margin: '5px',
    backgroundColor: '#007bff', // Button background color
    color: '#fff', // Button text color
    border: 'none',
    borderRadius: '3px',
    padding: '8px 16px',
    cursor: 'pointer',
    outline: 'none',
  },
  error: {
    color: 'red',
  }
};
