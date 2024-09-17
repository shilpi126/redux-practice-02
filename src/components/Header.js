import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartAction } from '../store/cart-slice'

const Header = () => {
   
    const dispatch = useDispatch()
    

    const handleToggleCart = () => {
        dispatch(cartAction.showCart())
    }


    return (
        <div className='nav'>
            <div>React App</div>
            <div className='btn'>
                <div className='badge'>1</div>
            <button onClick={handleToggleCart}>My Cart</button>
            </div>
        </div>
    )
}

export default Header