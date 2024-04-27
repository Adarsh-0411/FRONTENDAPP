import React, { useEffect, useState } from 'react';

export default function JobSeekerProfile() {
  const [jobseekerData, setJobSeekerData] = useState(null);

  useEffect(() => {
    const storedJobSeekerData = localStorage.getItem('jobseeker');
    if (storedJobSeekerData) {
      const parsedJobSeekerData = JSON.parse(storedJobSeekerData);
      setJobSeekerData(parsedJobSeekerData);
    }
  }, []);

  return (
    <div align='center' style={{ border: '3.5px solid black', borderRadius: '20px', padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
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
  );
}
