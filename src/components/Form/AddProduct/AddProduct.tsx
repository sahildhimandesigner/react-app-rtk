import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/index'
import { postProductData } from '../../../store/slices/AddProductService';
import { FormTypes } from './types'

const AddProduct = () => {
  
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({})

  const handleSubmit = (values:FormTypes, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void}) => { 
    setFormData(values);
    dispatch(postProductData(formData as FormTypes))
    setSubmitting(false);
    setFormData(formData)
  }

  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={{ product_name: '', product_category: '', description:'', product_price:'', product_image:''}}
          
          validate={values => {
            const errors = {};

            if (!values.product_name) {
              Object.assign(errors, {
                product_name: 'Please enter the product name'
              });
            }
            if (!values.product_category) {
              Object.assign(errors, {
                product_category: 'Please enter the category name'
              });
            }
            if (!values.description) {
              Object.assign(errors, {
                description: 'Please enter the category name'
              });
            }
            if (!values.product_price) {
              Object.assign(errors, {
                product_price: 'Please enter the category name'
              });
            }

            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='mb-5'>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Product Name
                </label>
                <div className="mt-2">
                  <Field type="text" className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="product_name" />

                  <ErrorMessage className='text-red-600' name="product_name" component="div" />
                </div>
              </div>

              <div className='mb-5'>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Product Category
                </label>
                <div className="mt-2">
                    <Field className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" name="product_category" />

                    <ErrorMessage className='text-red-600' name="product_category" component="div" />
                </div>              
              </div>

              <div className='mb-5'>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Product Description
                </label>
                <div className="mt-2">
                    <Field className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" name="description" />

                    <ErrorMessage className='text-red-600' name="description" component="div" />
                </div>              
              </div>

              <div className='mb-5'>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Product Price
                    </label>
                    <div className="mt-2">
                        <Field className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" name="product_price" as="textarea" />

                        <ErrorMessage className='text-red-600' name="product_price" component="div" />
                    </div>              
              </div>

              <div className='mb-5'>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Product Image
                    </label>
                    <div className="mt-2">
                        <Field className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" name="product_image" />

                        <ErrorMessage className='text-red-600' name="product_image" component="div" />
                    </div>              
              </div>


              <button className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' type="submit" disabled={isSubmitting}>
                Add Product
              </button>
            </Form>
          )}
        </Formik>
     </div>
    </div>
  )
}

export default AddProduct