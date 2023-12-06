import { useParams } from 'react-router-dom';
import activitiesData from '../data/activities.json';
import '../css/DetailPages.css'

export default function ActivityDetailPage() {
    const { activity } = useParams(); 

    const selectedActivity = activitiesData.activities.find((item) => item.name === activity)

    if (!selectedActivity) {
        return <div>Activity not found</div>;
      }

  return (
    <div className="page-container">
      <h1>{selectedActivity.name}</h1>
      <p>Location: {selectedActivity.location}</p>
      <p>Description: {selectedActivity.description}</p>
      <p>Dates: {selectedActivity.dates}</p>
      <img src={selectedActivity.img} alt={selectedActivity.name} />
    </div>
  )
}
