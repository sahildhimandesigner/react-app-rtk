import React from 'react'
import { useSelector } from "react-redux";
import Product from './Product';
import Loader from '../Loader/Loader'

const ProductListing = () => {
    const data = useSelector((state:any) => {
        return state.productData;
    }) 

    const item = data.products;

    const loader = data.loading;

  return (
    <div className="bg-white">
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