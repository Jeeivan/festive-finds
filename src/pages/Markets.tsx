import marketsData from '../data/markets.json';
import '../css/Markets.css';

export default function Markets() {
  return (
    <div className="markets-container">
      <h2 className="markets-title">Christmas Markets</h2>
      <div className="markets-list">
        {marketsData.markets.map((market, index) => (
          <div key={index} className="market-item">
            <h3 className="market-name">{market.name}</h3>
            <p className="market-location">Location: {market.location}</p>
            <p className="market-dates">Dates: {market.dates}</p>
            <img src={market.img} alt={market.name} className="market-image" />
          </div>
        ))}
      </div>
    </div>
  );
}
