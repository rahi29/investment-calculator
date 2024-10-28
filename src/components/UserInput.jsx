import { useState } from "react";

export default function UserInput() {
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
        [inputidentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userinput.InitialInvestment}
            onChange={(event) =>
              handlechange("InitialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userinput.AnnualInvestment}
            onChange={(event) =>
              handlechange("AnnualInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userinput.ExpectedReturn}
            onChange={(event) =>
              handlechange("ExpectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userinput.Duration}
            onChange={(event) => handlechange("Duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
