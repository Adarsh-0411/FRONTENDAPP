import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation effect when the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div style={styles.pageContainer}>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li><a href="/">Home</a></li>
          {/* Remove the About link from the navigation bar */}
          {/* <li><a href="/about">About</a></li> */}
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div style={{ ...styles.content, opacity: isVisible ? 1 : 0 }}>
        <h1 style={styles.heading}>About Campus Placement Management System</h1>
        <p>Welcome to our Campus Placement Management System! Our system is designed to streamline the process of managing campus placements in educational institutions.</p>
        <p style={styles.subheading}>Here are some key features of our system:</p>
        <ul style={styles.list}>
          <li>Efficient management of job postings from various companies</li>
          <li>Easy registration and profile creation for students</li>
          <li>Seamless application submission and tracking for students</li>
          <li>Automated scheduling of interviews and other placement events</li>
          <li>Comprehensive analytics and reporting for administrators</li>
        </ul>
        <p>Our goal is to connect students with exciting career opportunities and help companies find top talent from educational institutions.</p>
        <p>If you have any questions or feedback, please don't hesitate to <a href="/contact" style={styles.link}>contact us</a>.</p>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: '#fefefe', // Background color for the entire page
    minHeight: '100vh', // Ensure the background color covers the entire viewport height
    position: 'relative',
    overflow: 'hidden', // Hide overflow to prevent scrolling
  },
  nav: {
    backgroundColor: '#32588c',
    padding: '8px 20px', // Adjusted padding to accommodate fixed positioning
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  content: {
    maxWidth: '800px',
    margin: '60px auto 20px', // Adjusted margin-top to accommodate the smaller navbar and full page
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'opacity 0.5s ease-in-out',
  },
  heading: {
    color: '#007bff',
    fontSize: '28px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  subheading: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  list: {
    paddingLeft: '30px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default About;
