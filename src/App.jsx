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
    
    <div className=" inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className=" bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      </div>
    </div>
    </>
  )
}

export default App
