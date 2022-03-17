import axios from 'axios'
const urlapi = '/products'

export async function getProducts(){
    let info = await axios(urlapi)
    return info;
}
