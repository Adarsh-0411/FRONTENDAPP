import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';


export default function AddJob() {
  const [recruiterData, setRecruiterData] = useState("");

  useEffect(() => {
    const storedRecruiterData = localStorage.getItem('recruiter');
    if (storedRecruiterData) {
      const parsedRecruiterData = JSON.parse(storedRecruiterData);
      setRecruiterData(parsedRecruiterData)
    }
  }, []);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    company: '',
    roles: [], 
    location: '',
    salary: '',
    jobtype: '', 
    educationqualifications: '', 
    requirements: '',
    email: '',
    deadline: '',
    recruiter:''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleRolesChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setFormData({ ...formData, roles: selectedOptions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/addjob`, { ...formData, recruiter: recruiterData, company:recruiterData.company });
      if (response.status === 200) {
        setFormData({
          title: '',
          description: '',
          company: '',
          roles: [],
          location: '',
          salary: '',
          jobtype: '',
          educationqualifications: '',
          requirements: '',
          email: '',
          deadline: '',
          recruiter: ''
        });
      }
      setMessage(response.data);
      setError("");
    } 
    catch (error) 
    {
      setError(error.response.data);
      setMessage('');
    }
  };

  const formContainerStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#4ab5ea61', // Background color
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  };

  const textareaStyle = {
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    minHeight: '100px',
  };

  const selectStyle = {
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  };

  return (
    <div style={formContainerStyle}>
      <h3 align="center"><u>Post a New Job</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{ color: "red" }}>{error}</h4>
      }
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Title</label>
          <input type="text" id="title" value={formData.title} onChange={handleChange} style={inputStyle} required />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Description</label>
          <textarea id="description" value={formData.description} onChange={handleChange} style={textareaStyle} required />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Roles</label>
          <select id="roles" value={formData.roles} onChange={handleRolesChange} multiple required style={selectStyle}>
            <option value="Software Engineer">Software Engineer</option>
            <option value="System Engineer">System Engineer</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Testing">Testing</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Job Type</label>
          <select id="jobtype" value={formData.jobtype} onChange={handleChange} required style={selectStyle}>
            <option value="">---Select---</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Location</label>
          <input type="text" id="location" value={formData.location} onChange={handleChange} required style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Salary</label>
          <input type="number" id="salary" value={formData.salary} onChange={handleChange} required style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Education Qualifications</label>
          <textarea id="educationqualifications" value={formData.educationqualifications} onChange={handleChange} required style={textareaStyle} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Requirements(Skills)</label>
          <textarea id="requirements" value={formData.requirements} onChange={handleChange} required style={textareaStyle} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Contact Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Deadline</label>
          <input type="date" id="deadline" value={formData.deadline} onChange={handleChange} required style={inputStyle} />
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
