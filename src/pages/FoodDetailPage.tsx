import { useParams } from 'react-router-dom';
import foodsData from '../data/food.json';
import '../css/DetailPages.css'

export default function FoodDetailPage() {
  const { food } = useParams(); 

  const selectedFood = foodsData.food.find((item) => item.name === food);

  if (!selectedFood) {
    return <div>Food not found</div>;
  }

  return (
    <div className="page-container">
      <h1>{selectedFood.name}</h1>
      <p>Location: {selectedFood.location}</p>
      <p>Description: {selectedFood.description}</p>
      <img src={selectedFood.image} alt={selectedFood.name} />
    </div>
  );
}
