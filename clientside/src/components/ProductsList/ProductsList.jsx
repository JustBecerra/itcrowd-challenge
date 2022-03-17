import React from "react"
import Product from "../Product/Product.jsx"
import axios from 'axios'
import './ProductsList.css'

export default function ProductsList(){
    const [products,setProducts] = React.useState([])
    // console.log(products)
    React.useEffect(() => {
        (async () => {
        try{
          let info = await axios("http://localhost:3002/products", {mode:'cors'})
          setProducts(info.data)
        }catch(err){
          console.log(err.message)
        }
          
        })()
    },[])

    return(
        <div className="plST">
          {products.map(p => <Product key={p.id} name={p.name} image={p.image_url} price={p.price} description={p.description}/>)}
        </div>
    )
}