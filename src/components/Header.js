import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartAction } from '../store/cart-slice'
import { uiAction } from '../store/ui-slice'

const Header = () => {
    const totalQuantity = useSelector((state)=>state.cart.totalQuantity)
    const dispatch = useDispatch()
    

    const handleToggleCart = () => {
        dispatch(uiAction.showCart())
    }


    return (
        <div className='nav'>
            <div>React App</div>
            <div className='btn'>
                <div className='badge'>{totalQuantity}</div>
            <button onClick={handleToggleCart}>My Cart</button>
            </div>
        </div>
    )
}

export default Header