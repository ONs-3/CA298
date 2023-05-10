import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewCohort = () => {
  const navigate = useNavigate();
  const [cohort, setCohort] = useState({
    name: "",
    degree: "",
  });

  const handleChange = (event) => {
    setCohort({
      ...cohort,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("/api/cohort/", cohort);
    navigate.push("/cohorts");
  };

  return (
    <div>
      <h1>Create a New Cohort</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={cohort.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="degree">Degree:</label>
          <input
            type="text"
            name="degree"
            value={cohort.degree}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Cohort</button>
      </form>
    </div>
  );
};

export default NewCohort;
