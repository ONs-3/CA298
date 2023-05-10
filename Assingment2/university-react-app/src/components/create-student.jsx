import React, { useState } from 'react';
import axios from 'axios';

const NewStudent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [studentId, setStudentId] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    await axios.post('http://127.0.0.1:8000/api/student/', {
      first_name: firstName,
      last_name: lastName,
      student_id: studentId
    });
    setFirstName('');
    setLastName('');
    setStudentId('');
    alert('New student created!');
  };

  return (
    <div>
      <h1>Create New Student</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={firstName} onChange={event => setFirstName(event.target.value)} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={lastName} onChange={event => setLastName(event.target.value)} />
        </div>
        <div>
          <label htmlFor="studentId">Student ID:</label>
          <input type="text" id="studentId" value={studentId} onChange={event => setStudentId(event.target.value)} />
        </div>
        <button type="submit">Create Student</button>
      </form>
    </div>
  );
};

export default NewStudent;
