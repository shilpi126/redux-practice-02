import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartAction } from '../store/cart-slice'


const CartModal = () => {
    const cartToggle = useSelector((state) => state.ui.toggleCart)
    const cartData = useSelector((state)=>state.cart.cartItems)
    console.log(cartData)
  
    const dispatch = useDispatch()

    const removeQuantity = (id) =>{
        dispatch(cartAction.decreaseQuantity(id))
    }

    const addQuantity = (id) => {
        dispatch(cartAction.increaseQuantity(id))
    }

return (
<>
{cartToggle && 
  <div className='modal'>
  <h2>Cart</h2>
<ul>
    {cartData && cartData.map((item,index)=>(
          <li key={item.id}>
              <img src={item.image} width={40} height={30}/>
              <p>{item.title}</p>
              <p>${item.price}</p>
              <p className='quantity'>x {item.quantity}</p>
        
             <div className='bottom'>
             <button onClick={()=>{removeQuantity(item.id)}}>-</button>
             <button onClick={()=>{addQuantity(item.id)}}>+</button>
             </div>
    
      </li>
    ))}
</ul>
</div>
}
</>
)
}

export default CartModal