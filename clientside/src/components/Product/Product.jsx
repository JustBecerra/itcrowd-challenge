import React from "react"
import "./Product.css"
import Modal from 'react-modal';
import DeleteProd from "../DeleteProd/DeleteProd";

export default function Product({id, name, image, price, description}){
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
    
    function closeModal() {
      setIsOpen(false);
    }

    return(
      <div className="prodST" >
        <DeleteProd id={id} />
        <div className='clickDiv' onClick={openModal}>
          
          <img src={image} className="imageInfo" crossOrigin="true"/><br/>
          <h4 className="nameinfo">
            {name}
          </h4>
          <h4 className="priceinfo">
            ${price}
          </h4>
        </div>
        
        
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          className='modalBG'
        >
          <button onClick={closeModal} className='closeButton'>X</button>
          <img src={image} className="imageModal" crossOrigin="true"/><br/>
          <h4 className="nameModal">
            {name}
          </h4>
          <h4 className="priceModal">
            ${price}
          </h4>
          <p className="descriptionInfo">
            {description}
          </p>
         
        </Modal>
      </div>
    )
}