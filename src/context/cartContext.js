import { createContext } from "react";
import { useState, useEffect } from "react";

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({cursos}) => {
    const [cart, setCart]  = useState([])
    console.log(cart)
    
    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.log('El Producto ya fue agregado');

        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart ([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart}}>
            { cursos }
        </CartContext.Provider>
    )
}