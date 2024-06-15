import { add, deleteP } from "../actions/types"


const init = {
    cart: []
}

const cartReducer = (state = init, action)=>{
    if(action.type == add){
        const index = state.cart.findIndex(prod => prod.id == action.payload.id)
        if(index == -1){
            return {cart : [...state.cart , action.payload]}
        }else{
            console.log('tets')
            const product = state.cart[index]
            product["quantity"] +=1
            state.cart[index] = product
            return {cart:[...state.cart]}
        }
        
    }else if(action.type == deleteP){
        // console.log(action.payload)
        return {cart : state.cart.filter(product => product.id != action.payload.id)}
    }
    else if(action.type == "inc"){
        const index = state.cart.findIndex(prod => prod.id == action.id)
        const product = state.cart[index]
        product["quantity"] +=1
        state.cart[index] = product
        return {cart:[...state.cart]}
    }
    else if(action.type == "dec"){
        const index = state.cart.findIndex(prod => prod.id == action.id)
        const product = state.cart[index]
        if(product["quantity"] > 1){
            product["quantity"] -=1
            state.cart[index] = product
            return {cart:[...state.cart]}
        }
    }
    else{
        return state
    }
}


export default cartReducer