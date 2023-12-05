import activitiesData from '../data/activities.json';
import '../css/Activities.css';

export default function Activities() {
  return (
    <div className="activities-container">
      <h2 className="activities-title">Christmas Activities</h2>
      <div className="activities-list">
        {activitiesData.activities.map((activity, index) => (
          <div key={index} className="activity-item">
            <h3 className="activity-name">{activity.name}</h3>
            <p className="activity-location">Location: {activity.location}</p>
            <p className="activity-description">Description: {activity.description}</p>
            <p className="activity-dates">Dates: {activity.dates}</p>
            <img src={activity.img} alt={activity.name} className="activity-image" />
          </div>
        ))}
      </div>
    </div>
  );
}
