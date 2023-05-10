import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Student = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [student, setStudent] = useState(null);
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const { data } = await axios.get('http://127.0.0.1:8000/api/student/');
      setStudents(data);
    };
    const fetchStudent = async () => {
      if (selectedStudentId) {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/student/${selectedStudentId}/`);
        setStudent(data);
      }
    };
    const fetchGrades = async () => {
      if (selectedStudentId) {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/grade/?student=${selectedStudentId}`);
        setGrades(data);
      }
    };
    fetchStudents();
    fetchStudent();
    fetchGrades();
  }, [selectedStudentId]);

  const handleSelectStudent = (event) => {
    setSelectedStudentId(event.target.value);
  };

  if (!student) return null;

  return (
    <div>
      <select value={selectedStudentId} onChange={handleSelectStudent}>
        <option value="">Select a student</option>
        {students.map(student => (
          <option key={student.student_id} value={student.student_id}>
            {student.first_name} {student.last_name}
          </option>
        ))}
      </select>
      <h1>{student.first_name} {student.last_name}</h1>
      <p>Student ID: {student.student_id}</p>
      <h2>Registered Modules:</h2>
      <ul>
        {student.modules.map(module => (
          <li key={module.code}>{module.code} - {module.full_name}</li>
        ))}
      </ul>
      <h2>Grades:</h2>
      <ul>
        {grades.map(grade => (
          <li key={grade.id}>{grade.module.code} - {grade.total_grade}</li>
        ))}
      </ul>
    </div>
  );
};

export default Student;
