import { createAsyncThunk } from "@reduxjs/toolkit"

const url = process.env.REACT_APP_URL_APP_URL;

export const searchProduct = createAsyncThunk('prodcut/searchProduct', async(query:any) => {
    try {
        const response = await fetch(`${url}/?product_name=${query}`)
        console.log(response, 'response')
        if(!response.ok){
            throw new Error('Failed to fetch search results');
        }
        const data = await response.json();

        console.log(data, 'data')
        return data;
    } catch (error) {
        throw error;
    }
})