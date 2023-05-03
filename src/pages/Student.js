import React from "react";
import './route.css'
import Exam_Time_Table from './Exam_Time_Table'


function Student() {
    return (
        <div>
        <h1 ClassName="Student"><u>Student Details</u></h1>
        <div>
            
        <dl class="s">
            <h3 class="n"><b><u>Ganesh Kumar</u></b></h3>
            <dd>  Attendance: 75%</dd><br></br>
            <dd> Sem Percentage: 80%</dd><br></br>
            <dd> Pratical percentage: 65%</dd><br></br>
            <dd> Completed Tasks: 15</dd><br></br>
            <dd> Incompleted Tasks: 5</dd><br></br>
            <div class="k">
            <h3 class="k"><u> DETAILS</u></h3>
            <label  for="file">Javascript:</label>
            <progress id="file" value="72" max="100"> 72% </progress><br></br>
            <label for="file">Reactjs:</label>
            <progress id="file" value="72" max="100"> 80% </progress><br></br>
            <label for="file">HTML:</label>
            <progress id="file" value="72" max="100"> 75% </progress><br></br>
            <label for="file">Mongodb:</label>
            <progress id="file" value="72" max="100"> 70% </progress><br></br>
            <label for="file">Nodejs:</label>
            <progress id="file" value="72" max="100"> 77% </progress><br></br>
            </div>
                 <Exam_Time_Table />
            
        </dl>
      
        </div>
        </div>
    )
}


export default Student;