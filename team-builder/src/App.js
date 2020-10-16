
import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
const initialFormValues = { name: "" };
const team7 = ["Naruto", "Sasuke", "Sakura"]

function App() {
  const [team, setTeam] = useState(team7);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const onChange = (event)=>{
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
    console.log(formValues)

    const onSubmit = event => {
      event.preventDefault()
      
      axios.post('http://reqres.in/api/users', newPerson)
      .then (res => {
        console.log(res)
      })
    }


  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         We're going to build something today.
        </p>
        <div>
    


    
  <form onSubmit={() => onSubmit}>
    <label>
    Name: 
    <input onChange = {() => onChange} type="text" name="name" />
    
  </label>
  <br></br>
 
  <input  type="submit" value="Submit" />
  
</form>

<h1>Team Members</h1>

        </div>
       <p>Team Member: {team7.[0]}</p> 
        
      </header>
    </div>
  );
}

export default App;
