import { Link } from 'react-router-dom';
import '../css/Home.css';

export default function Home() {
  return (
    <div>
      <h1>London Festive Finds</h1>
      <div className="home-container">
        <div className="image-container">
          <Link to="/Festivefoods" className="navbar-link">
            <h3>Festive Foods</h3>
            <img src="https://www.hot-dinners.com/images/stories/features/2023/xmassandwich/blackpig.jpg" alt="" />
          </Link>
        </div>
        <div className="image-container">
          <Link to="/Sightseeing" className="navbar-link">
            <h3>Sightseeing</h3>
            <img src="https://www.regentstreetonline.com/media/iltemeja/the-spirit-of-christmas-by-regent-street.jpg" alt="" />
          </Link>
        </div>
        <div className="image-container">
          <Link to="/Markets" className="navbar-link">
            <h3>Markets</h3>
            <img src="https://absolutelymagazines.com/wp-content/uploads/2023/09/hero-14-1-jpg.webp" alt="" />
          </Link>
        </div>
        <div className="image-container">
          <Link to="/Activities" className="navbar-link">
            <h3>Activities</h3>
            <img src="https://blogsmedia.lse.ac.uk/blogs.dir/43/files/2021/11/WW-3.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
