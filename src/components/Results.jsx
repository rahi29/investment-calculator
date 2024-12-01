import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  const ResultData = calculateInvestmentResults(userInput);
  const initialInvestment =
    ResultData[0].valueEndOfYear -
    ResultData[0].interest -
    ResultData[0].annualInvestment;
  console.log(ResultData);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest Year</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>

      
        {ResultData.map((yeardata) => {
          const totalInterest =
            yeardata.valueEndOfYear -
            yeardata.annualInvestment * yeardata.year -
            initialInvestment;
          const totalAmountInvested = yeardata.valueEndOfYear - totalInterest;
          return (
            <tr key={yeardata.year}>
              <td>{yeardata.year}</td>
              <td>{formatter.format(yeardata.valueEndOfYear)}</td>
              <td>{formatter.format(yeardata.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
