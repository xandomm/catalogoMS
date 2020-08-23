import React from 'react';
import Header from './components/header'
import Routes from './routes'
import AOS from 'aos'


function App() {
  AOS.init();
  return (
    
    <div className="App">
    
    <Routes/>
    </div>
  );
}

export default App;
