import activitiesData from '../data/activities.json';
import '../css/Activities.css';
import { Link } from "react-router-dom"

export default function Activities() {
  return (
    <div className="activities-container">
      <h2 className="activities-title">Christmas Activities</h2>
      <div className="activities-list">
        {activitiesData.activities.map((activity, index) => (
          <Link to={`/activitydetailpage/${activity.name}`}>
          <div key={index} className="activity-item">
            <h3 className="activity-name">{activity.name}</h3>
            <img src={activity.img} alt={activity.name} className="activity-image" />
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
