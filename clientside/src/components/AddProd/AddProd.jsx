import React from "react"
import Modal from 'react-modal';
import './AddProd.css'

export default function AddProd(){
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
      }
      
    function closeModal() {
        setIsOpen(false);
    }
    
    function handleSubmit(){
      
    }

    return(
        <div>
          <button onClick={openModal}>Add product</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            className='modalBG'
          >
            <button onClick={closeModal} className='closeButton'>X</button>
            <form onSubmit={(e) => handleSubmit(e)}  className="OverlayModal">
                <input className="inputST" type="text" placeholder="url of the image" />
                <input className="inputST" type="text" placeholder="name of the product" />
                <input className="inputST" type="text" placeholder="price of the product" />
                <input className="inputST" type="text" placeholder="description of the product" />
                <button type="submit">upload</button>
            </form>
            
          </Modal>
        </div>
    )
}