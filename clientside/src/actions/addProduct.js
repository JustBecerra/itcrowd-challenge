import axios from "axios";
const urlapi = "/products";

export async function addProduct(prodInfo){
    await axios.post(urlapi, prodInfo)
}