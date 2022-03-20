import React from "react"
import {useSelector, useDispatch} from 'react-redux'
import Product from "../Product/Product.jsx"
import './ProductsList.css'
import { getProducts } from "../../actions/getProducts.js"

export default function ProductsList(){
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = React.useState(0)
    let products = useSelector(state => state.products).slice(currentPage, currentPage + 8)

    const nextPage = () => {
      if(currentPage < 8){//puse 8 como condicion para que no siga a paginas vacias
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
          dispatch(await getProducts())
          
        }catch(err){
          console.log(err.message)
        }
        })()
    },[])

    return(
        <div className="plST">
          {products && products.length > 0 ? products.map(p => <Product key={p.id} id={p.id} name={p.name} image={p.image_url} price={p.price} description={p.description}/>) : console.log(typeof products, products)}
          <div className="buttoncontainer">
            <button className='pagebuttons' onClick={lastPage}>
              Last Page
            </button>
            <button className='pagebuttons' onClick={nextPage}>
              Next Page
            </button>
          </div>
        </div>
    )
}