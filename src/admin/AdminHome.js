import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function AdminHome() {
  const [adminData, setAdminData] = useState("");
  const [counts, setCounts] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedAdminData = localStorage.getItem('admin');
    if (storedAdminData) {
      const parsedAdminData = JSON.parse(storedAdminData);
      setAdminData(parsedAdminData);
      fetchCounts();
    }
  }, []);

  const fetchCounts = async () => {
    try {
      const response = await axios.get(`${config.url}/analysis`);
      setCounts(response.data);
    } catch (error) {
      setError('Failed to fetch counts');
    }
  };

  return (
    <div>
      {adminData && (
        <div style={styles.container}>
          <h3 style={styles.heading}>Welcome {adminData.username}</h3>
          {counts ? (
            <div style={styles.cardContainer}>
              {Object.entries(counts).map(([key, value]) => (
                <div key={key} style={styles.card}>
                  <h3 style={styles.cardTitle}>{key}</h3>
                  <p style={styles.cardValue}>{value}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading counts...</p>
          )}
          {error && <p style={styles.error}>{error}</p>}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
    color: '#333',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    margin: '10px',
    padding: '20px',
    background: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    minWidth: '200px',
    maxWidth: '250px',
  },
  cardTitle: {
    marginBottom: '10px',
    color: '#555',
    fontSize: '18px',
  },
  cardValue: {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
  },
};
