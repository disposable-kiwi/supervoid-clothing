import { createContext, useContext, useState, useEffect } from "react";
import PRODUCTS from '../../shop-data.json';

//this should always be an Object with the keys representing the states you are keeping track of along with their initial values
export const ProductsContext = createContext({
    products:[],
    setProducts:()=>{}
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