import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Product from './Product';
import Shop from './Shop';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <>
    <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
    
    </>
  );
}

export default App;
