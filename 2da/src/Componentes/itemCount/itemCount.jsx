import { useState } from "react"
import { Button } from "antd"

const ItemCount = () => {

    const [counter, setCounter] = useState(1)
    const stock = 10

    const suma = () => {
        counter < stock && setCounter(counter +1)
    }

    const resta = () => {
        counter > 1 && setCounter(counter - 1)
    }

    return(
    <div>
        <div>
            <Button onClick={resta} >-</Button>
            <p>{counter}</p>
            <Button onClick={suma} >+</Button>
        </div>
        <Button>agregar al carrito</Button>
    </div>
    )
}

export default ItemCount