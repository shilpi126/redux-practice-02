import React, { useEffect } from 'react';
import './App.css';
import CartModal from './components/CartModal';
import Header from './components/Header';
import Product from './components/Product';
import store from './store';
import {Provider, useDispatch, useSelector} from "react-redux"
import { cartAction } from './store/cart-slice';
import Notification from './UI/Notification';

function App() {
  const cart = useSelector((state)=> state.cart.cartItems)
  //console.log(cart)
  const dispatch = useDispatch()
const notification = useSelector((state)=>state.cart.notification)

  useEffect(()=>{

    const sendCartData = async () => {
      if(cart.length ===0) return;
        dispatch(
          cartAction.showNotification({
            status:"pending",
            title:"sending...",
            message:"Sending cart data!"
          })
        )


      try{
        const response = await fetch("https://redux-pactice-default-rtdb.firebaseio.com/cart.json",{
          method: 'PUT',
          body:JSON.stringify(cart)
        });

        if(!response.ok){
          throw new Error('Sending cart data failed.')
        }

        dispatch(
          cartAction.showNotification({
            status:"success",
            title:"Success...",
            message:"Sending cart data Successfully!"
          })
        );

      }catch(error){
        dispatch(
          cartAction.showNotification({
            status:"error",
            title:"Error...",
            message:"Sending cart data Failed!"
          })
        )
      }

    
    }

    sendCartData();
  
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
