import React, { useState } from "react";
import './App.css';

function App() {

  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmi,setBmi] = useState(0);


  let BMI = (e) => {
    e.preventDefault()
    if (weight == 0 || height ==0 ){
      alert("Please enter a valid height and weight")
    }else{
      let bmi = ((weight)/(height*height))
      setBmi(bmi.toFixed(1))
      if(bmi <= 18){
        alert("Eat something or die very soon")
      }
    }

  }

  let reload = (e) => {
    window.location.reload()
  }
  return (
    <div className="container">
      <h2>BMI Calculator</h2>
      <div className="input">
        <label htmlFor="">Weight: </label>   
        <input type="text" placeholder="weight(in kg)" onChange = {event => {
          setWeight(event.target.value)
        }} />


      </div>

      <div>
        <label htmlFor=""> Height: </label>
        <input type="text" placeholder="Height(in m)" onChange={event => {
          setHeight(event.target.value)
        }}/>
      </div>

      <button className="btn" onClick= {BMI} >Submit</button>
      <button className="btn" onClick = {reload} >Reload</button>

      <div className="result">
        Your BMI is : {bmi}
      </div>
    </div>
  );
}

export default App;
