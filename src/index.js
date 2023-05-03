import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Student from './pages/Student';
import Teacher from './pages/Teacher';
import Exam_Time_Table from './pages/Exam_Time_Table';
import Notfound from './pages/notfound';
import './pages/route.css';
import Routeform from './Components/Routeform';
import './Components/Routeform';


function RouterApp() {
return(
  <Router>
     <div className="continer">
     <div className="continer1">
      
      <h1 className="firstline"> Dashboard </h1>
      <nav>
        <ul>
          <li><Link to="/Student">Student</Link></li>
          <li><Link to="/teacher">Teacher</Link></li>
          <li><Link to="/exam_time_table">Exam_Time_Table</Link></li>
        </ul>
      </nav>
      </div>
      <div className="continer2">
        <routeform/>
      <Routes>
      <Route path="student" element={<Student />}></Route>
      <Route path="teacher" element={<Teacher />}></Route>
      <Route path="exam_time_table" element={<Exam_Time_Table />}></Route>
      <Route path="*" element={<Notfound />}></Route>
      </Routes>
      </div>
      </div>
      
     
  </Router>
)
} 

ReactDOM.render(<RouterApp />, document.getElementById('root'));

