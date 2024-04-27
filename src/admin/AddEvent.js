import React, { useState, useRef } from 'react';
import axios from 'axios';
import config from '../config';

export default function AddEvent() {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    date: '',
    location: '',
    file: null
  });
 
  const fileInputRef = useRef(null); // Ref for the file input element

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('category', formData.category);
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('date', formData.date);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('file', formData.file); // Append the file object

      const response = await axios.post(`${config.url}/createevent`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set content type for FormData
        }
      });

      if (response.status === 200) {
        setFormData({
          category: '',
          title: '',
          description: '',
          date: '',
          location: '',
          file: null
        });
        fileInputRef.current.value = '';
      }
      setMessage(response.data);
      setError('');
    } 
    catch (error) 
    {
      setError(error.response.data);
      setMessage('');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h3 align="center"><u>Add Event</u></h3>
        {message ? <h4 align="center">{message}</h4> : null}
        {error ? <h4 align="center" style={{ color: 'red' }}>{error}</h4> : null}
        <form onSubmit={handleSubmit} encType="multipart/form-data" style={styles.form}>
          <div style={styles.inputContainer}>
            <label>Category</label>
            <input type="text" id="category" value={formData.category} onChange={handleChange} required />
          </div>
          <div style={styles.inputContainer}>
            <label>Title</label>
            <input type="text" id="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div style={styles.inputContainer}>
            <label>Description</label>
            <textarea id="description" value={formData.description} onChange={handleChange} required />
          </div>
          <div style={styles.inputContainer}>
            <label>Date</label>
            <input type="date" id="date" value={formData.date} onChange={handleChange} required />
          </div>
          <div style={styles.inputContainer}>
            <label>Location</label>
            <input type="text" id="location" value={formData.location} onChange={handleChange} required />
          </div>
          <div style={styles.inputContainer}>
            <label>Image</label>
            <input type="file" id="file" ref={fileInputRef} onChange={handleFileChange} required />
          </div>
          <button type="submit" style={styles.button}>Add</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
  },
  box: {
    width: '400px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor:'#4ab5ea61',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  inputContainer: {
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    padding: '8px 16px',
    cursor: 'pointer',
    outline: 'none',
  },
};
