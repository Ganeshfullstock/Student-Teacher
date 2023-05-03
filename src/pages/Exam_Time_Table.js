import React from "react";




 export default function Contect() {
        const handleClick = () => {
          window.location.replace('https://exampur.com/all-india-government-exams/');
        }
    
    return (
        <>
        <h1>Exam_Time_Table: </h1>
        <div>
            
        <button id="click" onClick={handleClick}>Exam Timetable here</button>
        
        </div>
        </>
        )
}



