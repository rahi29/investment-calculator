import { useState } from "react";

import Results from "./components/Results"
import Header from "./components/Header"
import UserInput from "./components/UserInput"


function App() {
  const [userinput, setuserinput] = useState({
    initialInvestment: 100,
    annualInvestment: 500,
    expectedReturn: 600,
    duration: 30,
  });

  const InputIsValid = userinput.duration >= 1;

  function handlechange(inputidentifier, newValue) {
    setuserinput((prevValue) => {
      return {
        ...prevValue,
        [inputidentifier]: +newValue,
      };
    });
  }
  return (
    <div>
      <Header />
      <UserInput onChange ={handlechange} userinput={userinput}/>
      {!InputIsValid && <p className="center">Please enter a duration greater than zero</p>}
      {InputIsValid && <Results userInput={userinput}/>}
    </div>
    
  )
    
}

export default App
