import { add, deleteP } from "./types"

export const  ADD = (product)=>{
    product["quantity"] = 1
    return {
        type:add,
        payload:product
    }
}


export const DELETE = (dispatch,product)=>{
    return dispatch({
        type: deleteP,
        payload: product
    })
}
