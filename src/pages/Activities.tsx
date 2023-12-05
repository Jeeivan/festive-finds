import activitiesData from '../data/activities.json'
import '../css/Activities.css'

export default function Activities() {
  return (
    <div>
      <h2>Christmas Activities</h2>
      {activitiesData.activities.map((activity, index) => (
        <div key={index}>
          <h3>{activity.name}</h3>
          <p>Location- {activity.location}</p>
          <p>Description- {activity.description}</p>
          <p>Dates- {activity.dates}</p>
          <img src={activity.img} alt="" />
          <hr />
        </div>
      ))}
    </div>
  )
}

