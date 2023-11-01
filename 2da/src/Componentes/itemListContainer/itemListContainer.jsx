import { useEffect, useState } from "react"
import Item from "../item/item"
import { Spin } from 'antd'
import { useParams } from "react-router-dom"


const ItemListContainer =() => {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()



    useEffect(() => {
        const url = categoryId ? `https://fakestoreapi.com/products/category/${categoryId}` : `https://fakestoreapi.com/products`
        fetch(url)
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                setProducts(json)
            })
            .catch(error => console.error(error))



    },[categoryId])
  
    return(
        <>
        {products.length > 0 ? (
            <>
                {products.map((prod, index) => <Item key={index} producto={prod} /> )}
            </>
        ) : (
            <Spin />
        )}
        </>
    )
}

export default ItemListContainer