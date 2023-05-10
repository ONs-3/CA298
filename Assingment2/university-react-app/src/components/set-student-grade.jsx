import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SetGrade = () => {
  const [modules, setModules] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [grade, setGrade] = useState('');

  useEffect(() => {
    // Fetch all modules
    axios.get('/api/module/')
      .then(response => setModules(response.data))
      .catch(error => console.log(error));

    // Fetch all students
    axios.get('/api/student/')
      .then(response => setStudents(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleModuleChange = event => {
    const moduleId = event.target.value;
    setSelectedModule(modules.find(module => module.id === parseInt(moduleId)));
  };

  const handleStudentChange = event => {
    const studentId = event.target.value;
    setSelectedStudent(students.find(student => student.id === parseInt(studentId)));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (selectedModule && selectedStudent && grade !== '') {
      axios.post('/api/grade/', {
        module: selectedModule.id,
        student: selectedStudent.id,
        grade: grade
      })
        .then(response => {
          console.log(response.data);
          setSelectedModule(null);
          setSelectedStudent(null);
          setGrade('');
        })
        .catch(error => console.log(error));
    }
  };

  return (
    <div>
      <h1>Set Grade</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="module">Module:</label>
          <select id="module" value={selectedModule ? selectedModule.id : ''} onChange={handleModuleChange}>
            <option value="">Select a module</option>
            {modules.map(module => <option key={module.id} value={module.id}>{module.code} - {module.title}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="student">Student:</label>
          <select id="student" value={selectedStudent ? selectedStudent.id : ''} onChange={handleStudentChange}>
            <option value="">Select a student</option>
            {students.map(student => <option key={student.id} value={student.id}>{student.name}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="grade">Grade:</label>
          <input id="grade" type="text" value={grade} onChange={event => setGrade(event.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SetGrade;
