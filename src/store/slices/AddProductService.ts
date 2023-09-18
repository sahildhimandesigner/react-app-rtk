import { createAsyncThunk } from "@reduxjs/toolkit";
import { FormTypes } from 'components/Form/AddProduct/types'

const url = process.env.REACT_APP_URL_APP_URL;

export const postProductData = createAsyncThunk('prodcut/postData', async (formData:FormTypes) => {
    
  try {
    const response = await fetch(url || '', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json'}
    });
  
    if (!response.ok) {
      // Handle non-2xx HTTP status codes here
      throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
  
    return data as any;
    
  } catch(error) {
     // Handle any fetch-related errors here
     console.error("Error fetching data:", error);
     throw error; // Rethrow the error to propagate it up to the Redux state
  }
});