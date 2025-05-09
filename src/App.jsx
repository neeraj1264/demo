import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactUs from './pages/Contact';
import VisionMission from './pages/VisionMission';
import CompanyValues from './pages/CompanyValues';
import DifferenceWithImage from './pages/Difference';
import "./App.css";
import ScrollToTop from './util/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision" element={<VisionMission />} />
        <Route path="/values" element={<CompanyValues />} />
        <Route path="/about" element={<DifferenceWithImage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;