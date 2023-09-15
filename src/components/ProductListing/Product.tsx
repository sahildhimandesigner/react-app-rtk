import React from 'react'

const Product = ({productData}:any) => {
    const getProductId = (id:number) => {
        console.log(id, 'id')
    }
    
  return (   
    <div key={productData.id} className="group relative">
        <h3 className="text-sm mb-4 text-gray-700">
            <button onClick={() => getProductId(productData.id)}>
                <span aria-hidden="true" className="absolute inset-0"></span>
                {productData.product_name}
            </button>
        </h3>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">    
            {productData.product_image ? <img className="mx-auto flex-shrink-0 " src={productData.product_image} alt={productData.product_image} /> : <img className="h-full w-full object-cover object-center lg:h-full lg:w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" alt="product" />}
        </div>
        
        <div className="mt-4 flex justify-between">
            <div>
                {productData.product_category}
                <p className="mt-1 text-sm text-gray-500"><br /> {productData.description}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{productData.product_price}</p>
        </div>
    </div>
  )
}

export default Product