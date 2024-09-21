
import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import data from "./data"
import { cartAction } from '../store/cart-slice'


const Product = () => {


    const dispatch = useDispatch();

    const handleButtonClick = (item) => {

        dispatch(cartAction.addToCart(item))
    }


return (
    <div className='prod'>
        <h2>Produts</h2>
        <div className='details'>
        {data && data.map((item,index)=> (
            <div key={index+1}>
                
                <img src={item.image} width={40} height={40} />
                
                <p>{item.title}</p>
                <p>${item.price}</p>
            
            
            <button onClick={()=>{handleButtonClick(item)}}>Add To Cart</button>
            </div>
        ))}
        </div>
    </div>
)
}

export default Product