import axios from "axios";
const urlapi = "/products";

export async function getProducts(){
    try{
        let info = await axios(urlapi)
        console.log("action: ", info)
        return {type: "GET_PRODUCTS", payload:info.data}
    }catch(err){
        console.log(err.message)
    }
    
}
