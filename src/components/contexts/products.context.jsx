import { createContext, useContext, useState, useEffect } from "react";
import PRODUCTS from '../../shop-data.json';

export const ProductsContext = createContext({
    products:[]
});

export const ProductsProvider = ({children})=>{
    const [products, setProducts] = useState(PRODUCTS);
    const value={products, setProducts};

    // useEffect(()=>{
    //     setProducts();
    // },[]);

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}