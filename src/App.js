import React from 'react';
 import Second from "./Components/second";
 import Text from "./Components/Text";
// import Table from "./Components/Table";

function App() {
    
    const [name, setName] = useState("");
    const [word,setWord] = useState();
    function handleChange(event) {
        // console.log("Working")
        console.log(event.target.value);
        setName(event.target.value)
        // console.log(event.target.type)
        // console.log(event.target.placeholder)
     }
      function handleClick(event) {
        setWord(name)
        event.preventDefault();
        alert("You are now subscribed")
    }    

    
    return (

        <div className="container">
            <Second/>
            <Text/>
        <h1>Hi da {name}</h1>
       <form onSubmit={handleClick}>
        <input 
        onChange={handleChange}
        type="text" placeholder="Enter your Name"
        value={name} />
        <button type="submit"> Submit </button>
        </form>
        
</div>
    );
   

//          retuer (
//             <div className="continer"> 
//                 <Logtext />
//             </div>
//          )
  }
    export default App;

