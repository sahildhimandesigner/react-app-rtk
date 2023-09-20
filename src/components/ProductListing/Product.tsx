import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Product = ({productData, deleteProduct, addToCart}:any) => {
  return (   
    <div className="group relative">        
        

        <div className="aspect-h-1 items-end flex flex-col aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">    
            <div className='items-end flex flex-row justify-between w-full px-2'>
              <h3 className="text-sm mb-4 text-gray-700">
                  {productData.product_name}
              </h3>
              <button className='relative p-4' onClick={() => deleteProduct(productData.id)}>
                <FaTrashAlt />
              </button>
            </div>
            {productData.product_image ? <img className="mx-auto flex-shrink-0 " src={productData.product_image} alt={productData.product_image} /> : <img className="h-full w-full object-cover object-center lg:h-full lg:w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" alt="product" />}
        </div>
        
        <div className="my-4 flex justify-between">
            <div>
                {productData.product_category}
                <p className="mt-1 text-sm text-gray-500">
                  {productData.description}
                </p>
            </div>
            <p className="text-sm font-medium text-gray-900">{productData.product_price}</p>
        </div>

        <button className='mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  sm:mt-0 sm:w-auto' type='button' onClick={() => addToCart(productData.id)}>Add To Cart</button>
    </div>
  )
}

export default Product