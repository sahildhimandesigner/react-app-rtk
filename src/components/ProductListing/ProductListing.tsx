import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Product from './Product';
import Loader from '../Loader/Loader'
import { AppDispatch } from '../../store/index'
import { searchProduct } from '../../store/slices/SearchProductService'
import { Search } from 'components/Search';
import { deleteProductItem } from '../../store/slices/RemoveProductService'
import { addToCartItem } from '../../store/slices/ProductListSlice';


const ProductListing = () => {

    const dispatch = useDispatch<AppDispatch>();

    const [query, setQuery] = useState('');

    const searchHandler = () => {
        const search_query = query.charAt(0) + query.slice(1)
        
        dispatch(searchProduct(search_query));
    }

    const data = useSelector((state:any) => {
        return state.productData;
    })

    const item = query ? data.searc_results : data.products;

    const loader = data.loading;

    const deleteProduct = (product_id: number) => {
        dispatch(deleteProductItem(product_id))
    }

    const addToCart = (product_id:number) => {
        const filter_product = item.filter((items:any) => items.id === product_id);
        dispatch(addToCartItem(filter_product));
    }

  return (
    <div className="bg-white">

        <Search 
            buttonLable="Search" 
            value={query} 
            inputType="text" 
            onChange={(e:any) => setQuery(e.target.value)} 
            onClick={searchHandler}
            />

        {loader ? <Loader /> : <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
            <div className='flex'>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {item && item.map((product:any) =>{
                        return (
                        <Product 
                            key={product.id} 
                            deleteProduct={deleteProduct} 
                            productData={product} 
                            addToCart={addToCart}
                            />
                        )
                    })}
                </div>
            </div>
        </div>}        
    </div>
  )
}

export default ProductListing