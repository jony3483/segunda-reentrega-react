import { createContext, useState } from "react";
//cartcontext

//creo el context
export const CartContext = createContext();

//creo el componenete del context
const CartComponentContext = ({children}) => {

    const [numero, setNumero] = useState(5)

    const suma = () => {
        setNumero(numero + 1)
    }

    return(
        <CartContext.Provider value={{numero, setNumero, suma}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartComponentContext