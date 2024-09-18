import React, { useEffect } from 'react';
import './App.css';
import CartModal from './components/CartModal';
import Header from './components/Header';
import Product from './components/Product';
import store from './store';
import {Provider, useSelector} from "react-redux"

function App() {
  const cart = useSelector((state)=> state.cart.cartItems)
  //console.log(cart)


  useEffect(()=>{
    fetch("https://redux-pactice-default-rtdb.firebaseio.com/cart.json",{
      method: 'PUT',
      body:JSON.stringify(cart)
    })
  },[cart])



  return (
      <React.Fragment>
      <Header/>
     <div className='main'>
     <CartModal/>
     <Product/>
     </div>
     </React.Fragment>
    
  );
}

export default App;
