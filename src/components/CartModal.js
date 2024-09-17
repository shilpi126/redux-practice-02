import React from 'react'
import { useSelector } from 'react-redux'


const CartModal = () => {
    const cartToggle = useSelector((state) => state.cart.toggleCart)

    
return (
<>
{cartToggle && 
  <div className='modal'>
  <h2>Cart</h2>
  <div className='box'>
      <div className='top'>
          <h3>Item</h3>
          <h4>$20.00</h4>
      </div>
      <div className='bottom'>
          <h4>x3</h4>
         <div >
         <button>-</button>
         <button>+</button>
         </div>
      </div>
  </div>
</div>
}
</>
)
}

export default CartModal