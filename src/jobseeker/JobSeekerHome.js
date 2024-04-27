import React, { useEffect, useState } from 'react';

export default function JobSeekerHome() {
  const [jobseekerData, setJobSeekerData] = useState("");

  useEffect(() => {
    const storedJobSeekerData = localStorage.getItem('jobseeker');
    if (storedJobSeekerData) {
      const parsedJobSeekerData = JSON.parse(storedJobSeekerData);
      setJobSeekerData(parsedJobSeekerData)
    }
  }, []);

  return (
    <div>
      {jobseekerData && (
        <div>
          <h1 align='center'>Welcome {jobseekerData.fullname}</h1>
        </div>
      )}
    </div>
  );
}