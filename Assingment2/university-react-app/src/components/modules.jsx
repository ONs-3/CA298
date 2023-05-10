import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Modules = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/module/')
      .then(response => {
        setModules(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>All Modules</h1>
      <ul>
        {modules.map(module => (
          <li key={module.code}>
            <Link to={`/module/${module.code}`}>{module.code} {module.full_name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/modules/new">Create a Module</Link>
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
};

export default Modules;
