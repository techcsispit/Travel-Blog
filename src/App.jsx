import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your pages/components
import Home from './pages/Home';
import Destination from './pages/Destination';
import About from './pages/About';
import MainCard from "./components/MainCard";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
