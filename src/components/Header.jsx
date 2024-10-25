import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <div id='header'>
      <img src={logo} alt="A logo showing money bag" />
      <h1>Investment Calculator </h1>
    </div>
  );
}
