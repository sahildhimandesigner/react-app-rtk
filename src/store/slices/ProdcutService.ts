import { createAsyncThunk } from "@reduxjs/toolkit";

const url = process.env.REACT_APP_URL_APP_URL;

export const getProductData = createAsyncThunk('prodcut/fetchData', async () => {    
    
    const response = await fetch(url || '');

    return response.json();
});