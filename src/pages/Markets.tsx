import marketsData from '../data/markets.json'
import '../css/Markets.css'

export default function Markets() {
  return (
    <div>
      <h2>Christmas Markets</h2>
      {marketsData.markets.map((market, index) => (
        <div key={index}>
          <h2>{market.name}</h2>
          <p>Location- {market.location}</p>
          <p>Dates- {market.dates}</p>
          <img src={market.img} alt="market" />
          <hr />
        </div>
      ))}
    </div>
  )
}
