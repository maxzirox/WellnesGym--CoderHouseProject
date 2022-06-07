import { createContext, useState } from "react";

const CartContext = createContext()



const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])

    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart){
            console.log("se agrego al carrito: ", product)
        return setCartListItems(cartListItems =>[...cartListItems, product])
        }console.log("ya esta en el carrito")
    }
    
    const removeProductToCart = (product) => {
        const newCartListItems = cartListItems.find(item => item.id !== product.id);
        setCartListItems(newCartListItems);
    }

    const removeAllCart = () => {
        setCartListItems([]);
    }

    const data = {
        cartListItems,
        addProductToCart,
        removeProductToCart,
        removeAllCart
    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider}