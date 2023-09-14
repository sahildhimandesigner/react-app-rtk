import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductData } from '../../store/slices/ProdcutService'

const ProductList = () => {

  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(getProductData());
  }, []); 

  return (
    <div>product</div>
  )
}

export default ProductList;