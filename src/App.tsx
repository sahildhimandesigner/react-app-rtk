import React from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from './components/Form/AddProduct/AddProduct'
import CartItem from './components/CartItem/CartItem';

const App: React.FC = () =>  {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/addProduct' element={<AddProduct />} />
          <Route path='/cart' element={<CartItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
