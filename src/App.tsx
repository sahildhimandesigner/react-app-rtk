import React from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import { Header } from './components/Header';

const App: React.FC = () =>  {
  return (
    <div className="App">
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
