import foodsData from '../data/food.json';
import '../css/FestiveFoods.css';

export default function FestiveFoods() {
  return (
    <div className="festive-foods-container">
      <h2 className="festive-foods-title">Festive Foods</h2>
      <div className="foods-list">
        {foodsData.food.map((food, index) => (
          <div key={index} className="food-item">
            <h3 className="food-name">{food.name}</h3>
            <p className="food-location">Location: {food.location}</p>
            <p className="food-description">Description: {food.description}</p>
            <img src={food.image} alt={food.name} className="food-image" />
          </div>
        ))}
      </div>
    </div>
  );
}
