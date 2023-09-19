import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Product from './Product';
import Loader from '../Loader/Loader'
import { AppDispatch } from '../../store/index'
import { searchProduct } from '../../store/slices/SearchProductService'

const ProductListing = () => {

    const dispatch = useDispatch<AppDispatch>();

    const [query, setQuery] = useState('');

    const searchHandler = () => {
        const search_query = query.charAt(0).toUpperCase() + query.slice(1)
        console.log(search_query, 'search_query')
        dispatch(searchProduct(search_query));
    }

    const data = useSelector((state:any) => {
        return state.productData;
    })

    console.log(query, 'query');

    const item = data.products;

    const loader = data.loading;

  return (
    <div className="bg-white">

        <input className='block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' type='text' value={query} 
        onChange={(e) => setQuery(e.target.value)} />

        <button className='btn' onClick={searchHandler}>Search</button>

        {loader ? <Loader /> : <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
            <div className='flex'>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {item.map((product:any) =>{
                        return (
                        <Product productData={product} />
                        )
                    })}
                </div>
            </div>
        </div>}        
    </div>
  )
}

export default ProductListing