import '../pages/NotFound.css';
import notFoundGif from '../assets/gif.gif';
function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <img src={notFoundGif} alt="gif" />
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
