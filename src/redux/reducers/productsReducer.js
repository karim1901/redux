import { getData } from "../actions/types"

const init = {products:[]}

const productsReducer = (state = init  , action)=>{

    if(action.type == getData){
        return {products:action.payload}
    }else{
        return state
    }

}


export default productsReducer
