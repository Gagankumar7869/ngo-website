import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Donate from './pages/Donate';

// A temporary placeholder for the Home page until we build it
const Home = () => (
  <div className="container py-5 text-center mt-5">
    <h1 className="display-4 fw-bold text-primary">Serving Humanity is Serving God</h1>
    <p className="lead mt-3">Welcome to Abha Seva Sadan. Our full homepage is under construction.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;