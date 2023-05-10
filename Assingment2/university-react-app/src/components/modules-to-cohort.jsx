import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ModulesDeliveredToCohort = () => {
  const { cohort } = useParams();
  const [modules, setModules] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/module/?delivered_to=${cohort}`)
      .then(response => {
        setModules(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [cohort]);

  return (
    <div>
      <h1>Modules delivered to {cohort}</h1>
      <ul>
        {modules.map(module => (
          <li key={module.code}>
            <p>Name: {module.name}</p>
            <p>Code: {module.code}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModulesDeliveredToCohort;
