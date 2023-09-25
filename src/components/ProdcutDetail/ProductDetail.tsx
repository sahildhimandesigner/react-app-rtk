import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

    const { productId } = useParams();

    const product = useSelector((state: any) => {
        return state.productData.products.find((product: any) => product.id === Number(productId));
    });

  return (

    <div className='w-[60%] mx-auto'>
    {product ? (<div className='flex flex-row'>
            <div className='flex flex-col w-[50%]'>
                <h1 className='my-5'>{product.product_name}</h1>
                
                <div className='w-[90%]'>
                    {product.product_image ? <img className="mx-auto flex-shrink-0 " src={product.product_image} alt={product.product_image} /> : <img className="h-full w-full object-cover object-center lg:h-full lg:w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" alt="product" />}
                </div>
            </div>

            <div className="my-4 flex-col flex w-[50%] justify-content-center">
                <div className='w-full'>
                    {product.product_category}                
                </div>
                <h4 className="text-sm w-full font-medium text-gray-900">{product.product_price}</h4>
                <p className="mt-1 text-sm text-gray-500">
                    {product.description}
                </p>            
            </div>
        </div>) : (<div className='mt-5'>Product not found</div>)}
    </div>
    
  )
}

export default ProductDetail;