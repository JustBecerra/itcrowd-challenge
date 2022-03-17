import axios from "axios";
const urlapi = "http://localhost:3002/products";

export async function addProduct(prodInfo){
    await axios.post(urlapi, prodInfo)
}