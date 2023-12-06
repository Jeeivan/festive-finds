import { useParams } from 'react-router-dom';
import sightSeeingData from '../data/sightseeing.json';
import '../css/DetailPages.css'

export default function SightSeeingDetailPage() {
    const { sight } = useParams()

   const selectedSight = sightSeeingData.sightseeingPlaces.find((item) => item.name === sight)

   if (!selectedSight) {
    return <div>Sight not found</div>
   }

  return (
    <div className="page-container">
        <h1>{selectedSight.name}</h1>
        <p>{selectedSight.location}</p>
        <p>{selectedSight.nearestStation}</p>
        <p>{selectedSight.dates}</p>
        <img src={selectedSight.img} alt="sight" />
    </div>
  )
}
