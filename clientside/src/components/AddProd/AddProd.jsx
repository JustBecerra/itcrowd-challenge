import React from "react"
import Modal from 'react-modal';
import './AddProd.css'
import {useDispatch} from 'react-redux'
import { addProduct } from "../../actions/addProduct";
import { getProducts } from "../../actions/getProducts";

export default function AddProd(){
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [prodInfo,setprodInfo] = React.useState({
      image_url:'',
      name:'',
      price:0,
      description:''
    })
    
    const dispatch = useDispatch()

    function openModal() {
      setIsOpen(true);
    }
      
    function closeModal() {
      setIsOpen(false);
    }
    
    async function handleSubmit(e){
      e.preventDefault()
      try{
        await addProduct(prodInfo)
        dispatch(await getProducts())
        setprodInfo({
          image_url:'',
          name:'',
          price:0,
          description:''
        })
        closeModal()
      }catch(err){
        console.log(err.message)
      }
    }

    function handleInput(e){
      setprodInfo({
        ...prodInfo,
        [e.target.name]: e.target.value
      })
    }

    return(
        <div>
          <button className="AddButton" onClick={openModal}>Add product</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            className='modalBG'
          >
            <button onClick={closeModal} className='closeButton'>X</button>
            <form onSubmit={(e) => handleSubmit(e)}  className="OverlayModal">
              <input className="inputST" name="image_url" type="text" onChange={(e) => handleInput(e)} placeholder="url of the image" />
              <input className="inputST" name="name" type="text" onChange={(e) => handleInput(e)} placeholder="name of the product" />
              <input className="inputST" name="price" type="text" onChange={(e) => handleInput(e)} placeholder="price of the product" />
              <input className="inputST" name="description" type="text" onChange={(e) => handleInput(e)} placeholder="description of the product" />
              <button type="submit">upload</button>
            </form>
            
          </Modal>
        </div>
    )
}