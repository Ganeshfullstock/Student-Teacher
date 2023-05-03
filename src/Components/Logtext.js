import React, {useState} from "react";

 function Logtext() {
    
    const [loggedin, setLoggedin] = useState(false)
return (
    <div>
        {
        loggedin ? <h1>yes</h1> : <h1>No</h1>
        }
        <button onClick={() => setLoggedin(!loggedin)}>click me</button>
         Hi    
    </div>
)


}


export default Logtext;