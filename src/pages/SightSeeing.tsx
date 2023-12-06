import sightSeeingData from '../data/sightseeing.json';
import '../css/SightSeeing.css';
import { Link } from 'react-router-dom';

export default function SightSeeing() {
  return (
    <div className="sightseeing-container">
      <h2 className="sightseeing-title">Christmas Sightseeing</h2>
      <div className="sights-list">
        {sightSeeingData.sightseeingPlaces.map((sights, index) => (
          <Link to={`/sightdetailpage/${sights.name}`}>
          <div key={index} className="sight-item">
            <h3 className="sight-name">{sights.name}</h3>
            <img src={sights.img} alt={sights.name} className="sight-image" />
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
