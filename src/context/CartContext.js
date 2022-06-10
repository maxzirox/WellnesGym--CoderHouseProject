import { createContext, useState } from "react";

const CartContext = createContext()



const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])
    

    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart){
             setCartListItems(cartListItems =>[...cartListItems, product])
             console.log(product.cantidad, "producto agregado: ", product )
        }else{
            setCartListItems((product) => product.filter((item) => item.cantidad ))
            if(product.cantidad <= product.stock)
            product.cantidad = product.cantidad +1
         }
    }
    
    const removeProductToCart = (producto) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === producto.id)
        if(isInCart){
            setCartListItems((product) => product.filter((item) => item.cantidad ))
            
            producto.cantidad = producto.cantidad - 1
        }
        
        
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