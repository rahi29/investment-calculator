import { useState } from "react";

import Results from "./components/Results"
import Header from "./components/Header"
import UserInput from "./components/UserInput"


function App() {
  const [userinput, setuserinput] = useState({
    InitialInvestment: 100,
    AnnualInvestment: 500,
    ExpectedReturn: 600,
    Duration: 30,
  });

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
      <UserInput onchange ={handlechange} userinput={userinput}/>
      <Results userInput={userinput}/>
    </div>
    
  )
    
}

export default App
