import axios from "axios";
const urlapi = "http://localhost:3002/products";

export async function getProducts(){
    // let info = await axios(urlapi, {mode:'no-cors'})
    // return {type: "GET_PRODUCTS", payload:info.data}
    let info = await fetch(urlapi, {
        method: 'GET',
        mode:  'no-cors'
      })
      .then(async res => { return res.json()
    })
    console.log(info)
    return {type: "GET_PRODUCTS", payload:info}
}