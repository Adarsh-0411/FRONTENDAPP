// Home.js

import React from 'react';

const Home = () => {
  return (
    <div style={styles.backgroundContainer}>
      <div style={styles.contentContainer}>
        <header>
          <h1 style={styles.heading}>Welcome to Campus Placement Management System</h1>
          <p style={styles.subheading}>Connecting students with their dream careers</p>
        </header>
        <section>
          <h2 style={styles.sectionHeading}>How it Works</h2>
          <p style={styles.paragraph}>Our platform simplifies the campus placement process for both students and recruiters. Here's how it works:</p>
          <ol style={styles.list}>
            <li>Recruiters post job openings</li>
            <li>Students create profiles and apply for positions</li>
            <li>Recruiters review applications and schedule interviews</li>
            <li>Students attend interviews and land their dream jobs</li>
          </ol>
        </section>
        <section>
          <h2 style={styles.sectionHeading}>Why Choose Us</h2>
          <p style={styles.paragraph}>With our platform, students can explore a wide range of career opportunities and connect with top companies. Recruiters benefit from access to a pool of talented students from leading educational institutions.</p>
        </section>
        <footer>
          <p style={styles.footerText}>Ready to get started? <a href="/registration" style={styles.link}>Sign up now</a> or <a href="/login" style={styles.link}>log in</a> if you already have an account.</p>
        </footer>
      </div>
    </div>
  );
};

const styles = {
  backgroundContainer: {
    position: 'relative',
    backgroundImage: 'url("C:/Users/tnsad/Downloads/background-image.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px', // Adjust the height as needed
  },
  contentContainer: {
    position: 'absolute',
    top: '50px', // Adjust the top position to overlay the content as needed
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Background color with transparency
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '800px',
    width: '100%',
  },
  heading: {
    fontSize: '36px',
    color: '#333',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '18px',
    color: '#666',
  },
  sectionHeading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '16px',
    color: '#666',
    lineHeight: '1.5',
    marginBottom: '20px',
  },
  list: {
    marginLeft: '20px',
  },
  footerText: {
    fontSize: '16px',
    color: '#666',
    textAlign: 'center',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default Home;
