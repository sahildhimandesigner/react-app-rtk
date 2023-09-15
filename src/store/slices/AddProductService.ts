import { createAsyncThunk } from "@reduxjs/toolkit";
import { FormTypes } from 'components/Form/AddProduct/types'

const url = process.env.REACT_APP_URL_APP_URL;

export const postProductData = createAsyncThunk('prodcut/postData', async (formData:FormTypes) => {
    
  const response = await fetch(url || '', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json'}
  });

  const data = await response.json();

  return data as any;
});