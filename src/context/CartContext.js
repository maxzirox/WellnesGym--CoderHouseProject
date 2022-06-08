import { createContext, useState } from "react";

const CartContext = createContext()



const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])
    const [cantidad, setCantidad ] = useState(0)

    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart){
            console.log("se agrego al carrito: ", product)
        return setCartListItems(cartListItems =>[...cartListItems, product])
        }console.log("ya esta en el carrito")
    }
    
    const removeProductToCart = (producto) => {
        setCartListItems((product) => product.filter((item) => item.id !== producto.id))
        setCantidad(0)
    }

    const removeAllCart = () => {
        setCartListItems([]);
        setCantidad(0)
    }

    const addCountCart = (contador) => {
        setCantidad(contador + 1)
        console.log("contador desde context: ", cantidad)   
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