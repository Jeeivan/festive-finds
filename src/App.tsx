import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Markets from './pages/Markets';
import FestiveFoods from './pages/FestiveFoods';
import SightSeeing from './pages/SightSeeing';
import Activities from './pages/Activities';
import Footer from './components/Footer';


function App() {
  return (
    <main className="App">
            <Navbar />
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Markets' element={<Markets/>} />
            <Route path='/Festivefoods' element={<FestiveFoods/>} />
            <Route path='/Sightseeing' element={<SightSeeing/>} />
            <Route path='/Activities' element={<Activities/>} />
            </Routes>
            <Footer />
    </main>
  );
}

export default App;
