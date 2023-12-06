import foodsData from '../data/food.json';
import '../css/FestiveFoods.css';
import { Link } from "react-router-dom"

export default function FestiveFoods() {
  return (
    <div className="festive-foods-container">
      <h2 className="festive-foods-title">Festive Foods</h2>
      <div className="foods-list">
        {foodsData.food.map((food, index) => (
          <Link to={`/fooddetailpage/${food.name}`}>
          <div key={index} className="food-item">
            <h3 className="food-name">{food.name}</h3>
            <img src={food.image} alt={food.name} className="food-image" />
          </div>
            </Link>
        ))}
      </div>
    </div>
  );
}
