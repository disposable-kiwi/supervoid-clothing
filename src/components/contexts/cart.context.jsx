import {createContext, useEffect, useState} from 'react';

const addCartItem = (cartItems, productToAdd)=>{
    const existingCartItem = cartItems.find((cartItem)=>{
        return cartItem.id === productToAdd.id
    });

    if(existingCartItem){
        return cartItems.map((cartItem)=> cartItem.id===productToAdd.id ? {...cartItem, quantity:cartItem.quantity+1}:cartItem);
    }

    return [...cartItems, {...productToAdd, quantity:1}];
};

const removeCartItem = (cartItems, cartItemToRemove)=>{
    //finding the item in the cart that we need to remove
    const existingCartItem = cartItems.find((cartItem)=>{
        return cartItem.id === cartItemToRemove.id
    });

    //if the quantity is equal to 1 and we decrement it 1, then it is 0 and we must remove it from the cart
    if(existingCartItem.quantity===1){
        return cartItems.filter(cartItem => cartItem.id!==cartItemToRemove.id);
    }
    //return that includes the cartItems with matching cartItem with a reduced quantity
    return cartItems.map((cartItem)=> cartItem.id===cartItemToRemove.id ? {...cartItem, quantity:cartItem.quantity-1}:cartItem);
};

const clearCartItem = (cartItems, cartItemToClear)=>{
    return cartItems.filter(cartItem => cartItem.id!==cartItemToClear.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart: ()=>{},
    removeItemFromCart: ()=>{},
    clearItemFromCart: ()=>{},
    cartCount:0,
    cartTotal:0
});

export const CartProvider = ({children})=>{
    const[isCartOpen, setIsCartOpen] = useState(false);
    const[cartItems,setCartItems] = useState([]);
    const[cartCount, setCartCount] = useState(0);
    const[cartTotal, setCartTotal] = useState(0);

    //will only reset the state of cartCount if the state of cartItems ever change and this WILL change
    //only when we click "Add to Cart" on the product-card child Component
    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem)=>{
                return total+cartItem.quantity;
        },0);

        setCartCount(newCartCount);
    },[cartItems]);

    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total, cartItem)=>{
            return total+ cartItem.quantity*cartItem.price;
    },0);

    setCartTotal(newCartTotal);
    },[cartItems]);

    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (cartItemToRemove)=>{
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const clearItemFromCart = (cartItemToClear) =>{
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    };

    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart, cartItems, cartCount, cartTotal, setCartTotal};

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
};