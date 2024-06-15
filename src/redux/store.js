import { applyMiddleware, combineReducers, createStore } from "redux";
import productsReducer from "./reducers/productsReducer";
import { thunk } from "redux-thunk";
import cartReducer from "./reducers/cartReducer";



const store = createStore( combineReducers({
    products:productsReducer,
    cart: cartReducer
}) , applyMiddleware(thunk) )


export default store

