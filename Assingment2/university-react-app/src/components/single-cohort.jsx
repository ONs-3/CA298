import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleCohort = () => {
  const { id } = useParams();
  const [cohort, setCohort] = useState({});
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getCohort = async () => {
      const response = await axios.get(`http://127.0.0.1:8000/api/cohort/${id}`);
      setCohort(response.data);
    };

    const getStudents = async () => {
      const response = await axios.get(`http://127.0.0.1:8000/api/student/?cohort=${id}`);
      setStudents(response.data);
    };

    getCohort();
    getStudents();
  }, [id]);

  return (
    <div>
      <h1>{cohort.name}</h1>
      <h2>Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student.student_id}>Name: {student.first_name} {student.last_name}     SID: {student.student_id}</li>
        ))}
      </ul>
    </div>
  );
};

export default SingleCohort;
