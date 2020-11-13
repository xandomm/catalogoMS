import React from 'react';
import Header from './components/header'
import Routes from './routes'
import AOS from 'aos'
import ProdutosProvider from './Context/productContext'

function App() {
  const url_backend = 'http://localhost:5000'
  AOS.init();
  return (
    <ProdutosProvider>
    <div className="App">
    
    <Routes url_backend={url_backend}/>
    </div>
    </ProdutosProvider>
  );
}

export default App;
