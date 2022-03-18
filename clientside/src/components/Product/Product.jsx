import React from "react"
import "./Product.css"
import Modal from 'react-modal';

export default function Product({name, image, price, description}){
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
    
    function closeModal() {
      setIsOpen(false);
    }

    return(
      <div className="prodST" >
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
          <img src={image} className="imageInfo" crossOrigin="true"/><br/>
          <h4 className="nameinfo">
            {name}
          </h4>
          <h4 className="priceinfo">
            ${price}
          </h4>
          <p className="descriptionInfo">
            {description}
          </p>
         
        </Modal>
      </div>
    )
}