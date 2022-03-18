import axios from "axios";
const urlapi = "http://localhost:3002/products";

export async function deleteProduct(prodInfo){
    await axios.delete(urlapi, prodInfo)
}