import { Link } from "react-router-dom"
import '../../css/NavBar.css'

export default function Navbar() {
    return (
        <div className='navbar-container'>
        <Link to='/' className='navbar-link'>Home</Link>
        <Link to='/Festivefoods' className='navbar-link'>Festive Foods</Link>
        <Link to='/Sightseeing' className='navbar-link'>Sight Seeing</Link>
        <Link to='/Markets' className='navbar-link'>Christmas Markets</Link>
        <Link to='/Activities' className='navbar-link'>Christmas Activities</Link>
    </div>
      )
    }
    
