import {deleteProduct} from '../../actions/deleteProduct'

export default function DeleteProd({id}){
    async function deleteFunc(e){
      try{
        await deleteProduct(id)
      }catch(err){
        console.log(err.message)
      }
    }

    return(
        <div>
          {/* <button onClick={e => deleteFunc(e)}>
            X
          </button> */}
        </div>
    )
}