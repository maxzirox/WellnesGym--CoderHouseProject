import { createContext, useState } from "react";

const CartContext = createContext()



const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])
    const [cantidad, setCantidad ] = useState(0)

    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart){
             setCartListItems(cartListItems =>[...cartListItems, product])
        }else{
            console.log("ya esta en el carrito")
            setCantidad(cantidad + 1)
         }
    }
    
    const removeProductToCart = (producto) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === producto.id)
        if(isInCart){
        setCantidad(cantidad - 1)
        if(cantidad == 1){
            setCartListItems((product) => product.filter((item) => item.id !== producto.id))
            setCantidad(1)
        }
        }
    }

    const removeAllCart = () => {
        setCartListItems([]);
        setCantidad(1)
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
        addCountCart,
        cantidad
    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider}