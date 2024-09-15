import input from "./input_mask.gif"
import cities from "./cities.json"
import { useState } from "react"
import styles from "./App.module.css"

function App() {
 
  const[value,setValue]=useState("")
  const[hinit,setHinit]=useState("")
 

  const handleChange = (event) => {
    console.log(value)
    
   setValue(event.target.value)
   const newCity=cities.filter((city)=>city.charAt(0)===value.toUpperCase())
   console.log(newCity)

  setHinit(newCity)
   
  }
    return (
      <div className="input">
       
          <label htmlFor="input" >{hinit}</label>
        <input
          type="text"
          value={value[0]}
          onChange={handleChange}
        />
      
      </div>
    );
  };
  
  


export default App;
