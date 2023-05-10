import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Cohorts = () => {
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    const getCohorts = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/cohort/");
      setCohorts(response.data);
    };

    getCohorts();
  }, []);

  return (
    <div>
      <h1>All Cohorts</h1>
      <ul>
        {cohorts.map((cohort) => (
          <li key={cohort.id}><span className="marker"></span>
            <Link to={`/cohort/${cohort.id}`}>{cohort.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/cohorts/new">Create a Cohort</Link>
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

export default Cohorts;
