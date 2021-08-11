import logo from "../Assets/logo.png";
import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
    </header>
  );
}

export default Header;
