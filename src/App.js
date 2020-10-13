import React from 'react';
import Header from './components/header'
import Routes from './routes'
import AOS from 'aos'
import ProdutosProvider from './Context/productContext'
import * as firebase from 'firebase'
function App() {
  AOS.init();
  return (
    <ProdutosProvider>
    <div className="App">
    
    <Routes/>
    </div>
    </ProdutosProvider>
  );
}

export default App;
