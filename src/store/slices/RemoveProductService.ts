import { createAsyncThunk } from "@reduxjs/toolkit";

const url = process.env.REACT_APP_URL_APP_URL;

export const deleteProductItem = createAsyncThunk('product/deleteProductItem', async (product_id:number) => {

try {
    const response = await fetch(`${url}/${product_id}` || '', {
        method: 'DELETE',
    });
    
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
    }

    return product_id;

} catch(error) {

    console.error("Error fetching data:", error);

    throw error;
 }
})