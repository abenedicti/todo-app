import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';
function Sidebar({ isOpen, toggleBurgerMenu }) {
  const location = useLocation();

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {/* add cross to close the side bar with cross native html*/}
      <button className="close-menu" onClick={toggleBurgerMenu}>
        &times;
      </button>
      {/* inactive to avoid clicking when already on the page */}
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
    </div>
  );
}
export default Sidebar;
