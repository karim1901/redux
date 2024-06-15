import { useDispatch, useSelector } from "react-redux"
import { GET_Data } from "./redux/actions/productsActions"
import { useEffect } from "react"
import { ADD, DELETE } from "./redux/actions/cartActions"



function App(){

    const products = useSelector(state => state.products.products )

    const cart = useSelector(state => state.cart.cart)

    const dispatch = useDispatch()


    const getProducts = ()=>{
        dispatch(GET_Data())
    }


    useEffect(()=>{
        getProducts()
        
    },[])



    const addPanier = (product)=>{
        dispatch(ADD(product))
    }


    const delProd =(product)=>{
        DELETE(dispatch,product)
    }
    


    return <div className="app">
        <div className="products">
        {
           products.map(product =>{
            return <div className="product" key={product.id}>
                <img src={product.thumbnail} alt="" />
                <p>{product.title}</p>
                <button onClick={()=>{addPanier(product)}}>add panier</button>
            </div>
           })
        }
        </div>

        <div className="panier">
            <h3>Panier</h3>
            {
                cart.map(product =>{
                    return <div className="product" key={product.id}>
                        <img src={product.thumbnail} alt="" />
                        <p>{product.title}</p>
                        <div className="quantity">
                            <small>Quantity : </small>
                            <button onClick={()=>{dispatch({type:"inc" , id:product.id})}}>+</button>
                            <small> {product.quantity} </small>
                            <button onClick={()=>{dispatch({type:"dec" , id:product.id})}}>-</button>
                        </div>

                        <button onClick={()=>{delProd(product)}}>delete</button>
                    </div>
                })
            }
        </div>
    </div>
}


export default App