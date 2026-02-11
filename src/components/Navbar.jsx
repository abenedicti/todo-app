import './navbar.css';
import logo from '../assets/logo.png';
function Navbar({ toggleBurgerMenu }) {
  return (
    <div className="navbar">
      {/* burger menu native html */}
      <button className="burger-menu" onClick={toggleBurgerMenu}>
        &#9776;
      </button>
      <img src={logo} alt="logo" />
    </div>
  );
}
export default Navbar;
