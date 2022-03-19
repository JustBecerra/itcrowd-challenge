import axios from "axios";
const urlapi = "http://localhost:3002/products";

export async function getProducts(){
    let info = await axios(urlapi)
    return {type: "GET_PRODUCTS", payload:info.data}
}