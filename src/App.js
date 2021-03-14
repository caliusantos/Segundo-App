import React from 'react';
import './App.css';

import Header from './Componentes/Header/index.js';
import Footer from './Componentes/Footer/index.js';
import HomePage from './Componentes/HomePage/index.js';

function App() {
  return (
    <div className="App">
     <Header />
      <HomePage /> 
     <Footer />
    </div>
  );
}

export default App;