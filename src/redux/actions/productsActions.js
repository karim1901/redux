import axios from "axios"
import { getData } from "./types"


export const GET_Data = ()=>{
    return async (dispatch)=>{

        const res = await axios.get('https://dummyjson.com/products')
        // console.log(res)
        return dispatch({
            type: getData,
            payload : res.data.products
        })
    }
}