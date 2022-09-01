import React, {useState} from "react";
import "./index.css"
const StatesDemo=()=>{
 const[name, setName]  = useState("Kiran");
 const[counter, setCounter] = useState(0)
 function handleClick(){
    if (name === "Kiran"){
         setName("Dipak")
    }else{
        setName("Kiran")
    }
 }
    return(
        <div class="container">
       <h1>React States Demo</h1>
       <h2>The Name Is : {name}</h2>
       <h2>Counter : {counter}</h2>
       <button class="button" onClick = {handleClick}>Change Name</button>
       <button class="button" onClick={()=>setCounter(counter + 1)}>Increase Counter +</ button> 
       <button class="button" onClick={()=>setCounter(counter - 1)}>Decrease Counter -</button>
       </div>
    )
}
export default StatesDemo;