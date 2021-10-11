import './App.css';

import { useState } from "react";

export default function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmiResult, setBmiResult] = useState(null);

  const [status, setStatus] = useState("");

  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);

    setHeight("");
    setWeight("");
  }

  function getStatus(bmi) {
    if (bmi < 18.5) return "Under";
    else if (bmi >= 18.5 && bmi < 24.9) return "healthy";
    else if (bmi >= 25 && bmi < 29.9) return "Over";
    else return "Obese";
  }


  return (
    <div className="main">
      <form >
        <div className="head"> 
          BMI Calculator
        </div>
        <div>
          <div className="height">
            Enter your height in cm:
          </div>
          <input
            className="inHt"
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <div className="weight">
            Enter your weight in Kg:
          </div>
          <input
            className="inWt"
            type="Weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <button
            className="btn"
            type="button"
            onClick={calculateBMI}
          >
            Submit
          </button>
        </div>
        {bmiResult && (
          <div className="result">
            <p>Your BMI is {bmiResult} </p>
            <p>Your suggested weight range is between {}</p>
            <p>You are in a {status} weight range</p>
          </div>
        )}
      </form>
    </div>
  );
}

