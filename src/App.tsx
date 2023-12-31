import React from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import { Header } from './components/Header';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddProduct from './components/Form/AddProduct/AddProduct'
import CartItem from './components/CartItem/CartItem';
import ProductDetail from './components/ProdcutDetail/ProductDetail'

const App: React.FC = () =>  {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>        
          <Route path='/' element={<ProductList />} />
          <Route path='/addProduct' element={<AddProduct />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
          <Route path='/cart' element={<CartItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
