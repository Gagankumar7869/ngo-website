import React from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;