import { createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
 //find if cartItems contains oroductToAdd

 //if found , increment quantity

 //return new array with modified cartItem / new cart item
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}
});

export const CartProvider = ({children }) =>{
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    const value = { isCartOpen,setIsCartOpen };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}