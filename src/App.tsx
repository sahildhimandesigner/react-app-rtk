import React from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from './components/Form/AddProduct/AddProduct'

const App: React.FC = () =>  {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={ProductList} />
          <Route path='/addProduct' Component={AddProduct} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
