import { Link } from 'react-router-dom';
import '../../css/NavBar.css';
import Countdown from '../Countdown';

export default function NavBar() {
  return (
    <div className="navbar-container">
      <Link to="/festive-finds" className="navbar-link">
        Home
      </Link>
      <Link to="/Festivefoods" className="navbar-link">
        Festive Foods
      </Link>
      <Link to="/Sightseeing" className="navbar-link">
        Sight Seeing
      </Link>
      <Link to="/Markets" className="navbar-link">
        Christmas Markets
      </Link>
      <Link to="/Activities" className="navbar-link">
        Christmas Activities
      </Link>
      <Countdown />
    </div>
  );
};

