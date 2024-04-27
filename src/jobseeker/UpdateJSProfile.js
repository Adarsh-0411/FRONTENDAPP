import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';


export default function UpdateJSProfile() {
  const [jobseekerData, setJobSeekerData] = useState({
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
  const [initialJobseekerData, setInitialJobseekerData] = useState({});

  useEffect(() => {
    const storedJobSeekerData = localStorage.getItem('jobseeker');
    if (storedJobSeekerData) {
      const parsedJobSeekerData = JSON.parse(storedJobSeekerData);
      setJobSeekerData(parsedJobSeekerData);
      setInitialJobseekerData(parsedJobSeekerData); // Store initial job seeker data
    }
  }, []);

  const handleChange = (e) => {
    setJobSeekerData({ ...jobseekerData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {};
      for (const key in jobseekerData) {
        if (jobseekerData[key] !== initialJobseekerData[key] && initialJobseekerData[key] !== '') {
          updatedData[key] = jobseekerData[key];
        }
      }
      if (Object.keys(updatedData).length !== 0) {
        // There are changes
        updatedData.email = jobseekerData.email;
        const response = await axios.put(`${config.url}/updatejobseekerprofile`, updatedData);
        setMessage(response.data);
        setError('');
        const res = await axios.get(`${config.url}/jobseekerprofile/${jobseekerData.email}`, updatedData);
        localStorage.setItem('jobseeker', JSON.stringify(res.data));
      } else {
        // No changes
        setMessage('No Changes in Job Seeker Profile');
        setError('');
      }
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#4ab5ea61' }}>
      <h3 align="center">
        <u>Update Profile</u>
      </h3>
      {message ? (
        <h4 align="center">{message}</h4>
      ) : (
        <h4 align="center" style={{ color: 'red' }}>
          {error}
        </h4>
      )}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Full Name</label>
          <input type="text" id="fullname" value={jobseekerData.fullname} onChange={handleChange} required style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', marginTop: '6px', marginBottom: '16px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Gender</label>
          <input type="text" id="gender" value={jobseekerData.gender} readOnly style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', marginTop: '6px', marginBottom: '16px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Date of Birth</label>
          <input type="date" id="dateofbirth" value={jobseekerData.dateofbirth} onChange={handleChange} required style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', marginTop: '6px', marginBottom: '16px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Email</label>
          <input type="email" id="email" value={jobseekerData.email} readOnly style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', marginTop: '6px', marginBottom: '16px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Password</label>
          <input type="password" id="password" value={jobseekerData.password} onChange={handleChange} required style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', marginTop: '6px', marginBottom: '16px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Location</label>
          <input type="text" id="location" value={jobseekerData.location} onChange={handleChange} required style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', marginTop: '6px', marginBottom: '16px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Contact</label>
          <input type="number" id="contact" value={jobseekerData.contact} onChange={handleChange} required style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', marginTop: '6px', marginBottom: '16px' }} />
        </div>
        <button type="submit" style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Update</button>
      </form>
    </div>
  );
}
