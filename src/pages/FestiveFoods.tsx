import foodsData from '../data/food.json'
import '../css/FestiveFoods.css'

export default function FestiveFoods() {
  return (
    <div>
      <h2>Festive Foods</h2>
      {foodsData.food.map((food, index) => (
        <div key={index}>
          <h2>{food.name}</h2>
          <p>Location- {food.location}</p>
          <p>Description- {food.description}</p>
          <img src={food.image} alt="" />
          <hr />
        </div>
      ))}
    </div>
  )
}
