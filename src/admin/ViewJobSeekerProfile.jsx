import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import config from '../config';


export default function ViewJobSeekerProfile() {
  const [jobseekerData, setJobSeekerData] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const { email } = useParams();

  useEffect(() => {
    const fetchJobSeekerData = async () => {
      try {
        const response = await axios.get(`${config.url}/viewjobseekerprofile/${email}`);
        setJobSeekerData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    if (email) {
      fetchJobSeekerData();
    }
  }, [email]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  if (!email) {
    return null;
  }

  return (
    <div style={styles.container} onClick={handleFlip}>
      <div style={isFlipped ? styles.cardFlipped : styles.card}>
        <div style={styles.cardContent}>
          <h3>Job Seeker Profile</h3>
        </div>
        {isFlipped && (
          <div style={styles.cardContent}>
            {jobseekerData ? (
              <div>
                <p><strong>Full Name:</strong> {jobseekerData.fullname}</p>
                <p><strong>Gender:</strong> {jobseekerData.gender}</p>
                <p><strong>Date of Birth:</strong> {jobseekerData.dateofbirth}</p>
                <p><strong>Email:</strong> {jobseekerData.email}</p>
                <p><strong>Location:</strong> {jobseekerData.location}</p>
                <p><strong>Contact:</strong> {jobseekerData.contact}</p>
              </div>
            ) : (
              <p>No Job Seeker Data Found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  card: {
    width: '300px',
    height: '200px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.6s',
    cursor: 'pointer',
  },
  cardFlipped: {
    transform: 'rotateY(360deg)',
  },
  cardContent: {
    textAlign: 'center',
    padding: '20px',
  },
};
