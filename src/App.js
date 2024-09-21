import React, { useEffect } from 'react';
import './App.css';
import CartModal from './components/CartModal';
import Header from './components/Header';
import Product from './components/Product';
import store from './store';
import {Provider, useDispatch, useSelector} from "react-redux"
import { cartAction } from './store/cart-slice';
import Notification from './UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-action';

let isInitial = true;

function App() {
  const cart = useSelector((state)=> state.cart.cartItems)
  
  const dispatch = useDispatch()
  const notification = useSelector((state)=>state.ui.notification)

    useEffect(()=>{
      dispatch(fetchCartData())
    },[dispatch]);

  useEffect(()=>{

    if(isInitial){
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  
  },[cart,dispatch])



  return (
      <React.Fragment>
        {notification && (
          <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
          />
        )}
      <Header/>
     <div className='main'>
     <CartModal/>
     <Product/>
     </div>
     </React.Fragment>
    
  );
}

export default App;
