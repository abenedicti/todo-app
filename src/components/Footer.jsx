import { Link, useLocation } from 'react-router-dom';
import githubEmoji from '../assets/gitfooter.gif';
import './Footer.css';
function Footer() {
  return (
    <div className="footer">
      <p>
        <img src={githubEmoji} alt="github logo" />
        <a href="https://github.com/abenedicti/todo-app" target="_blank">
          Git repository
        </a>
      </p>
    </div>
  );
}
export default Footer;
