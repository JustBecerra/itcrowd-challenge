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
          <img src={image} crossOrigin="true"/><br/>
          <h2>
            {name}<br/>
            ${price}
          </h2>
        </div>
        
        
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          className='modalBG'
        >
          <button onClick={closeModal} className='closeButton'>X</button>
          <img src={image} crossOrigin="true"/><br/>
          <h2>
            {name}<br/>
            ${price}
          </h2>
          <p>
            {description}
          </p>
         
        </Modal>
      </div>
    )
}