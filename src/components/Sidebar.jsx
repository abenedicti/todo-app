import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';
function Sidebar({ isOpen, toggleBurgerMenu }) {
  const location = useLocation();

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {/* Croix pour fermer */}
      <button className="close-menu" onClick={toggleBurgerMenu}>
        &times; {/* symbole de croix */}
      </button>
      {location.pathname === '/' ? (
        <span className="inactive-link">Home</span>
      ) : (
        <Link to="/">Home</Link>
      )}

      {location.pathname === '/about' ? (
        <span className="inactive-link">About page</span>
      ) : (
        <Link to="/about">About page</Link>
      )}
      <p>Calendar</p>
    </div>
  );
}
export default Sidebar;
