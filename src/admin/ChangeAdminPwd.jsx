import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';


export default function ChangeAdminPwd() {
  const [adminData, setAdminData] = useState("");
  const [formData, setFormData] = useState({
    oldpassword: '',
    newpassword: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedAdminData = localStorage.getItem('admin');
    if (storedAdminData) {
      const parsedAdminData = JSON.parse(storedAdminData);
      setAdminData(parsedAdminData);
    }
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${config.url}/changeadminpwd`, { ...formData, "username": adminData.username });
      if (response.data != null) {
        localStorage.removeItem('isAdminLoggedIn');
        localStorage.removeItem('admin');
        navigate('/adminlogin');
        window.location.reload();
      } else {
        setMessage("Old Password is Incorrect");
        setError("");
      }
    } catch (error) {
      setMessage("");
      setError(error.response.data);
    }
  };

  const styles = {
    card: {
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#4ab5ea61',
      maxWidth: '300px',
      margin: 'auto',
      marginTop: '50px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    input: {
      margin: '10px 0',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      width: '100%',
      boxSizing: 'border-box',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: '#ffffff',
      cursor: 'pointer',
    },
  };

  return (
    <div>
      <div style={styles.card}>
        <h3 align="center"><u>Change Password</u></h3>
        {
          message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{ color: "red" }}>{error}</h4>
        }
        <form style={styles.form} onSubmit={handleSubmit}>
          <div>
            <label>Old Password</label>
            <input type="password" id="oldpassword" value={formData.oldpassword} onChange={handleChange} required style={styles.input} />
          </div>
          <div>
            <label>New Password</label>
            <input type="password" id="newpassword" value={formData.newpassword} onChange={handleChange} required style={styles.input} />
          </div>
          <input type="submit" value="Change" className="button" style={styles.button} />
        </form>
      </div>
    </div>
  );
}
