import React from 'react';
import logo from './logo.svg';
import './App.css';

const team7 = ["Naruto", "Sasuke", "Sakura"]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         We're going to build something today.
        </p>
        <div>
    


    
  <form>
    <label>
    Name: 
    <input type="text" name="name" />
    
  </label>
  <br></br>
 
  <input type="submit" value="Submit" />
  
</form>

<h1>Team Members</h1>

        </div>
       <p>Team Member: {team7.[0]}</p> 
        
      </header>
    </div>
  );
}

export default App;
