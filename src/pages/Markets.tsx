import marketsData from '../data/markets.json';
import '../css/Markets.css';
import { Link } from "react-router-dom"

export default function Markets() {
  return (
    <div className="markets-container">
      <h2 className="markets-title">Christmas Markets</h2>
      <div className="markets-list">
        {marketsData.markets.map((market, index) => (
          <Link to={`/marketdetailpage/${market.name}`}>
          <div key={index} className="market-item">
            <h3 className="market-name">{market.name}</h3>
            <img src={market.img} alt={market.name} className="market-image" />
          </div>
            </Link>
        ))}
      </div>
    </div>
  );
}
