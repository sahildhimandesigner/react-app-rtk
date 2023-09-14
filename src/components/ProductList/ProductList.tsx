import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductData } from '../../store/slices/ProdcutService'
import { AppDispatch } from '../../store/index'
import ProductListing from "../ProductListing/ProductListing";

const ProductList = () => {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => { 
    dispatch(getProductData());
  }, [dispatch]); 

  return (
    <ProductListing />   
  )
}

export default ProductList;