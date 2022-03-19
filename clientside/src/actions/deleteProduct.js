import axios from "axios";
const urlapi = "http://localhost:3002/products/";

export async function deleteProduct(id){
    await axios.delete(urlapi, id)
}