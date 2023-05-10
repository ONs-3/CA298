import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Degrees from './components/degrees';
import Degree from './components/single-degree';
import NewDegree from './components/create-degree';
import Cohorts from './components/cohorts';
import Cohort from './components/single-cohort';
import NewCohort from './components/create-cohort';
import Modules from './components/modules';
import Module from './components/single-module';
import ModulesDeliveredToCohort from './components/modules-to-cohort';
import NewModule from './components/create-module';
import Student from './components/student';
import NewStudent from './components/create-student';
import SetGrade from './components/set-student-grade';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/degrees">Degrees</a></li>
            <li><a href="/cohorts">Cohorts</a></li>
            <li><a href="/modules">Modules</a></li>
            <li><a href="/student">Students</a></li>
          </ul>
        </nav>
      <Routes>
        <Route path="/degrees" element={<Degrees />} />
        <Route path="/degrees/new" element={<NewDegree />} />
        <Route path="/degree/:shortcode" element={<Degree />} />
        <Route path="/cohorts" element={<Cohorts />} />
        <Route path="/cohorts/new" element={<NewCohort />} />
        <Route path="/cohort/:id" element={<Cohort />} />
        <Route path="/cohorts/:id/modules" element={<ModulesDeliveredToCohort />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/modules/new" element={<NewModule />} />
        <Route path="/module/:code" element={<Module />} />
        <Route path="/student/new" element={<NewStudent />} />
        <Route path="/student" element={<Student />} />
        <Route path="/student/:student_id/grades/:id" element={<SetGrade />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Welcome to my University Registration Application!</h2>
      <p>Select an option from the navigation bar at the top of the page to begin.</p>
    </div>
  );
}

export default App;
