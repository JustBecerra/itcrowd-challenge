import axios from "axios";
const urlapi = "/products";

export async function getProducts(){
    let info = await axios(urlapi)
    console.log("action: ", info)
    return {type: "GET_PRODUCTS", payload:info.data}
}

// export function getDiets(){
//     return async function(dispatch){
//         let json = await(await axios.get(/types)).data;
//         return dispatch({type: GET_DIETS, payload: json})
//     }
// }