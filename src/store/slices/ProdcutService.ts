import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProductData = createAsyncThunk('api1/fetchData', async () => {    
    const response = await fetch('https://api-generator.retool.com/BsUw6I/data');
    return response.json();
});