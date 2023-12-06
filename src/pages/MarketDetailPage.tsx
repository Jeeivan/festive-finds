import { useParams } from 'react-router-dom';
import marketsData from '../data/markets.json';
import '../css/DetailPages.css'

export default function MarketDetailPage() {
    const { market } = useParams()

    const selectedMarket = marketsData.markets.find((item) => item.name === market)

    if (!selectedMarket) {
        return <div>Market not found</div>
    }

  return (
    <div className="page-container">
        <h1>{selectedMarket.name}</h1>
        <p>{selectedMarket.location}</p>
        <p>{selectedMarket.dates}</p>
        <img src={selectedMarket.img} alt="market" />
    </div>
  )
}
