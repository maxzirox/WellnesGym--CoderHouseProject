import { createContext, useState } from "react";

const CartContext = createContext()



const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])
    const [count, setCount] = useState(0)

    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart){
            console.log("se agrego al carrito: ", product)
        return setCartListItems(cartListItems =>[...cartListItems, product])
        }console.log("ya esta en el carrito")
    }
    
    const removeProductToCart = (product) => {
        const newCartListItems = cartListItems.find(item => item.id !== product.id);
        setCartListItems(CartListItems =>[...newCartListItems, product]);
    }

    const removeAllCart = () => {
        setCartListItems([]);
    }

    const addCountCart = (contador) => {
        setCount(contador)
        console.log("contador desde context: ", count)   
    }

    const data = {
        cartListItems,
        addProductToCart,
        removeProductToCart,
        removeAllCart,
        addCountCart
    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider}