import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Degrees() {
  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/degree/')
      .then(response => response.json())
      .then(data => setDegrees(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>All Degrees</h1>
      <ul>
        {degrees.map(degree => (
          <li key={degree.shortcode}><span className='marker'></span>
          <Link to={`/degree/${degree.shortcode}`}>{degree.full_name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/degrees/new">Create a Degree</Link>
      <style>
        {`
          .marker {
            margin-right: 8px;
            padding: 4px;
            border-radius: 50%;
            background-colour: #007bff;
            color: #fff;
          }
        `}
      </style>
    </div>
  );
}

export default Degrees;
