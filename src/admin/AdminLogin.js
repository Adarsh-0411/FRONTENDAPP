import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';


export default function AdminLogin({ onAdminLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${config.url}/checkadminlogin`, formData);
      if (response.data) {
        onAdminLogin();
        localStorage.setItem('admin', JSON.stringify(response.data));
        navigate("/adminhome");
      } else {
        setError("Login Failed");
        setMessage("");
      }
    } catch (error) {
      setError("Login Failed. Please try again later.");
      setMessage("");
    }
    setLoading(false);
  };

  return (
    <div style={styles.ad}>
      <div style={styles.a}>
        <h3 style={styles.heading}><u>Admin Login</u></h3>
        {message && <h4 style={styles.message}>{message}</h4>}
        {error && <h4 style={styles.error}>{error}</h4>}
        <form onSubmit={handleSubmit} style={styles.form}>
          <h4 style={styles.h4}>Skill match  <span>hub</span></h4>
          <p style={styles.p}>Welcome back! Log in to your account to view today's Work:</p>
          <div style={styles.floatingLabel}>
            <input
              style={styles.input}
              placeholder="username"
              type="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <label style={styles.label} htmlFor="username">username:</label>
            <div style={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style={styles.svgIcon}>
                <g transform="translate(0 -952.36)">
                  <path d="m17.5 977c-1.3 0-2.4 1.1-2.4 2.4v45.9c0 1.3 1.1 2.4 2.4 2.4h64.9c1.3 0 2.4-1.1 2.4-2.4v-45.9c0-1.3-1.1-2.4-2.4-2.4h-64.9zm2.4 4.8h60.2v1.2l-30.1 22-30.1-22v-1.2zm0 7l28.7 21c0.8 0.6 2 0.6 2.8 0l28.7-21v34.1h-60.2v-34.1z"/>
                </g>
              </svg>
            </div>
          </div>
          <div style={styles.floatingLabel}>
            <input
              style={styles.input}
              placeholder="Password"
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label style={styles.label} htmlFor="password">Password:</label>
            <div style={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={styles.svgIcon}>
                <rect width="24" height="24"/>
                <path d="M19,21H5V9h14V21z M6,20h12V10H6V20z"/>
                <path d="M16.5,10h-1V7c0-1.9-1.6-3.5-3.5-3.5S8.5,5.1,8.5,7v3h-1V7c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5V10z"/>
                <path d="m12 16.5c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5zm0-2c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5 0.5-0.2 0.5-0.5-0.2-0.5-0.5-0.5z"/>
              </svg>
            </div>
          </div>
          <button
            style={styles.button}
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  ad: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    background: '#4ab5ea61', // Background color

  },
  a: {
    padding: '40px 30px',
    background: '#fefefe',
    width: '300px',
    borderRadius: '6px',
    boxShadow: '0px 2px 6px -1px rgba(0,0,0,.20)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  message: {
    textAlign: 'center',
  },
  error: {
    textAlign: 'center',
    color: 'red',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  h4: {
    marginBottom: '20px',
    color: 'rgba(0,0,0,.5)',
    fontSize: '24px',
    fontWeight: '600',
  },
  p: {
    lineHeight: '155%',
    marginBottom: '5px',
    fontSize: '14px',
    color: '#000',
    opacity: '.65',
    fontWeight: '400',
    maxWidth: '200px',
  },
  floatingLabel: {
    position: 'relative',
    marginBottom: '10px',
    width: '100%',
  },
  input: {
    fontSize: '16px',
    padding: '20px 0px',
    height: '56px',
    border: 'none',
    borderBottom: 'solid 1px rgba(0,0,0,.1)',
    background: '#fff',
    width: '280px',
    boxSizing: 'border-box',
    transition: 'all .3s linear',
    color: '#000',
    fontWeight: '400',
  },
  label: {
    position: 'absolute',
    top: 'calc(50% - 7px)',
    left: '0',
    opacity: '0',
    transition: 'all .3s ease',
    paddingLeft: '44px',
  },
  icon: {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '6px',
    width: '44px',
    display: 'flex',
  },
  svgIcon: {
    height: '3px',
    width: '30px',
    margin: 'auto',
    opacity: '.15',
    transition: 'all .3s ease',
  },
  button: {
    WebkitAppearance: 'none',
    width: 'auto',
    minWidth: '100px',
    borderRadius: '24px',
    textAlign: 'center',
    padding: '15px 40px',
    marginTop: '5px',
    backgroundColor: 'rgb(182,157,230)',
    color: '#fff',
    fontSize: '14px',
    marginLeft: 'auto',
    fontWeight: '500',
    boxShadow: '0px 2px 6px -1px rgba(0,0,0,.13)',
    border: 'none',
    transition: 'all .3s ease',
    outline: '0',
    cursor: 'pointer',
  },
  discrete: {
    color: 'rgba(0,0,0,.4)',
    fontSize: '14px',
    borderBottom: 'solid 1px rgba(0,0,0,.0)',
    paddingBottom: '4px',
    marginLeft: 'auto',
    fontWeight: '300',
    transition: 'all .3s ease',
    marginTop: '40px',
    cursor: 'pointer',
  },
};
