import React from 'react'
import { AddProduct } from 'components/Form/AddProduct'

const Model = ({closeModel}:any) => {
  return (
    <>
        <div className='fixed inset-0 z-10 bg-gray-500 bg-opacity-75 transition-opacity'></div>
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                <div className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6'>
                    <button onClick={closeModel} className='btn'>
                        close
                    </button>
                    <div>
                        <AddProduct />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Model