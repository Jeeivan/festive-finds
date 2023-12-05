import sightSeeingData from '../data/sightseeing.json';
import '../css/SightSeeing.css';

export default function SightSeeing() {
  return (
    <div className="sightseeing-container">
      <h2 className="sightseeing-title">Christmas Sightseeing</h2>
      <div className="sights-list">
        {sightSeeingData.sightseeingPlaces.map((sights, index) => (
          <div key={index} className="sight-item">
            <h3 className="sight-name">{sights.name}</h3>
            <p className="sight-location">Location: {sights.location}</p>
            <p className="sight-station">Nearest Station: {sights.nearestStation}</p>
            <p className="sight-dates">Open Until: {sights.dates}</p>
            <img src={sights.img} alt={sights.name} className="sight-image" />
          </div>
        ))}
      </div>
    </div>
  );
}
