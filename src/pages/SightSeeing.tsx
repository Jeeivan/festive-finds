import sightSeeingData from '../data/sightseeing.json'
import '../css/Markets.css'

export default function SightSeeing() {
  return (
    <div>
      <h2>Christmas Sightseeing</h2>
      {sightSeeingData.sightseeingPlaces.map((sights, index) => (
        <div key={index}>
          <h2>{sights.name}</h2>
          <p>Location- {sights.location}</p>
          <p>Nearest Station- {sights.nearestStation}</p>
          <p>Open Until {sights.dates}</p>
          <img src={sights.img} alt="sight" />
          <hr />
        </div>
      ))}
    </div>
  )
}
