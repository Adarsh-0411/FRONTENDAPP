import React, { useEffect, useState } from 'react';

export default function RecruiterProfile() {
  const [recruiterData, setRecruiterData] = useState(null);

  useEffect(() => {
    const storedRecruiterData = localStorage.getItem('recruiter');
    if (storedRecruiterData) {
      const parsedRecruiterData = JSON.parse(storedRecruiterData);
      setRecruiterData(parsedRecruiterData);
    }
  }, []);

  const cardStyle = {
    width: '300px',
    margin: '0 auto', // Center align
    border: '3.5px solid black',
    borderRadius: '20px',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const detailStyle = {
    fontSize: '14px',
    marginBottom: '10px',
  };

  return (
    <div style={cardStyle}>
      {recruiterData ? (
        <>
          <p style={detailStyle}><strong>Full Name:</strong> {recruiterData.fullname}</p>
          <p style={detailStyle}><strong>Gender:</strong> {recruiterData.gender}</p>
          <p style={detailStyle}><strong>Date of Birth:</strong> {recruiterData.dateofbirth}</p>
          <p style={detailStyle}><strong>Company:</strong> {recruiterData.company}</p>
          <p style={detailStyle}><strong>Email:</strong> {recruiterData.email}</p>
          <p style={detailStyle}><strong>Address:</strong> {recruiterData.address}</p>
          <p style={detailStyle}><strong>Contact:</strong> {recruiterData.contact}</p>
        </>
      ) : (
        <p>No Recruiter Data Found</p>
      )}
    </div>
  );
}
