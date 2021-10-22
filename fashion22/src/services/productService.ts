import axios from "axios"
import { IProduct } from "../interfaces/IProduct";

export const productService = ( function() {

    const urlToProductController = "https://localhost:5001/product";
    
    const getAllProducts = async () => 
    {
        const result = await axios.get<IProduct[]>(urlToProductController); 
        return result.data; 
    }

    return 
    {
        getAllProducts; 
    }

} () );