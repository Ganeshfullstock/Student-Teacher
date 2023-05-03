import React, {useState} from 'react';



function Mentor() {

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [Password, setPassword] = useState("");
     const [done, setDone] = useState();

    function handleChange(event){
        console.log(event.target.value);
        setName(event.target.value)
    }
    
    function handleClick (event) {
        setDone(name)
        event.preventDefault();
    }
    
    return (
        <div>
        <h1><u>Teacher router</u></h1> 
       <div>
        
       <dl class="p">
            <h3 class="n"><b><u>Babu</u></b></h3>
            <dd>  Attendance: 86%</dd><br></br>
            <dd> Knowledge about Subject: 80%</dd><br></br>
            <dd> Total Topic of Sylabus: 25 Topics</dd><br></br>
            <dd> Completed Topics: 18 Topics</dd><br></br>
            <dd> Incompleted Topics: 7 Topic</dd><br></br>
            </dl>
            <h3><u> Best Knowledge in:</u> </h3>
            <label for="file">Javascript:</label>
            <progress id="file" value="72" max="100"> 100% </progress><br></br>
            <label for="file">Reactjs:</label>
            <progress id="file" value="72" max="100"> 100% </progress><br></br>
            <label for="file">HTML:</label>
            <progress id="file" value="72" max="100"> 100% </progress><br></br>
            <label for="file">Mongodb:</label>
            <progress id="file" value="72" max="100"> 100% </progress><br></br>
            <label for="file">Nodejs:</label>
            <progress id="file" value="72" max="100"> 100% </progress><br></br>

        
          
            </div>
            </div>
           
    )
}


export default Mentor;