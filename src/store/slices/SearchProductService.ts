import { createAsyncThunk } from "@reduxjs/toolkit"

const url = process.env.REACT_APP_URL_APP_URL;

export const searchProduct = createAsyncThunk('prodcut/searchProduct', async(query:any) => {
    try {
        
        const response = await fetch(`${url}/?product_name=${encodeURI(query)}`)
        
        if(!response.ok){
            throw new Error('Failed to fetch search results');
        }
        const data = await response.json();

        return data;

    } catch (error) {
        throw error;
    }
})