import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleModule = () => {
  const { code } = useParams();
  const [module, setModule] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/module/${code}/`)
      .then(response => {
        setModule(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [code]);

  if (!module) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{module.full_name}</h1>
      <p>Code: {module.code}</p>
      <p>CA Split: {module.ca_split}</p>
      <p>Cohorts: </p>
    </div>
  );
};

export default SingleModule;
