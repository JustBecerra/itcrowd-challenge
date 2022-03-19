import axios from 'axios'
import './DeleteProd.css'

export default function DeleteProd({id}){
    async function deleteFunc(e){
      e.preventDefault()
      try{
        await axios.delete(`/products/${id}`)
      }catch(err){
        console.log(err.message)
      }
    }

    return(
        <div>
          <button className="deleteButton" onClick={e => deleteFunc(e)}>
            X
          </button>
        </div>
    )
}