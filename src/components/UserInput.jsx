
export default function UserInput({onchange, userinput}) {
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
              onchange("InitialInvestment", event.target.value)
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
              onchange("AnnualInvestment", event.target.value)
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
              onchange("ExpectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userinput.Duration}
            onChange={(event) => onchange("Duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
