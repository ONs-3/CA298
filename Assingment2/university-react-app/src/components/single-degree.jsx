import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Degree(props) {
  const { shortcode } = useParams();
  const [degree, setDegree] = useState({});
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/degree/${shortcode}/`)
      .then(response => response.json())
      .then(data => setDegree(data))
      .catch(error => console.error(error));

    fetch(`http://127.0.0.1:8000/api/cohort/?degree=${shortcode}`)
      .then(response => response.json())
      .then(data => setCohorts(data))
      .catch(error => console.error(error));
  }, [shortcode]);

  return (
    <div>
      <h1 className="text-xl font-bold">{degree.full_name}</h1>
      <h2>Cohorts</h2>
      <ul>
        {Array.isArray(cohorts) && cohorts.map(cohort => (
          <li key={cohort.id}>{cohort.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Degree;
