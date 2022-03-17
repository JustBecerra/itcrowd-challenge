import React from "react"
import {useSelector, useDispatch} from 'react-redux'
import Product from "../Product/Product.jsx"
import axios from 'axios'
import './ProductsList.css'
import { getProducts } from "../../actions/getProducts.js"

export default function ProductsList(){
    let products = useSelector(state => state.products)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = React.useState(0)
    
    const nextPage = () => {
      if(currentPage < 90){
        setCurrentPage( currentPage + 8)
      }
    }
  
    const lastPage = () => {
      if(currentPage > 0){
        setCurrentPage( currentPage - 8)
      }
    }

    React.useEffect(() => {
        (async () => {
        try{
          // let info = await axios("http://localhost:3002/products", {mode:'cors'})
          // setProducts(info.data)
          dispatch(await getProducts())
        }catch(err){
          console.log(err.message)
        }
        })()
    },[])

    return(
        <div className="plST">
          {products.map(p => <Product key={p.id} name={p.name} image={p.image_url} price={p.price} description={p.description}/>)}
          <button className='pagebuttons' onClick={lastPage}>
            Last Page
          </button>
          <button className='pagebuttons' onClick={nextPage}>
            Next Page
          </button>
        </div>
    )
}