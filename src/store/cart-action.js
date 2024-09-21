import cartSlice, { cartAction } from "./cart-slice";
import { uiAction } from "./ui-slice";


export const fetchCartData = () => {
    return async (dispatch) => {
        dispatch(
            uiAction.showNotification({
              status:"pending",
              title:"sending...",
              message:"Sending cart data!"
            })
          )

        const fetchData = async () => {
            const response = await fetch("https://redux-pactice-default-rtdb.firebaseio.com/cart.json");

            if(!response.ok){
                throw new Error('Could not fetch cart data!')
            }

            const data = await response.json();
            console.log(data);
            return data;

        }

        try{
            const cartData = await fetchData();
      
            dispatch(cartAction.replaceCart(cartData))
           dispatch(
             uiAction.showNotification({
               status:"success",
               title:"Success...",
               message:"Fetching cart data Successfully!"
             })
           );
     
         }catch(error){
           dispatch(
             uiAction.showNotification({
               status:"error",
               title:"Error...",
               message:"Fetching cart data Failed!"
             })
           )
         }
    }
}


export const sendCartData = (cart) => {
    
  return async (dispatch) => {
    dispatch(
        uiAction.showNotification({
          status:"pending",
          title:"sending...",
          message:"Sending cart data!"
        })
      )


        const sendRequest = async () => {
            const response = await fetch("https://redux-pactice-default-rtdb.firebaseio.com/cart.json",{
                method: 'PUT',
                body:JSON.stringify(cart)
            });

             console.log(response);

            if(!response.ok){
                throw new Error('Sending cart data failed.')
            }
        }

    try{
       await sendRequest();

      dispatch(
        uiAction.showNotification({
          status:"success",
          title:"Success...",
          message:"Sending cart data Successfully!"
        })
      );

    }catch(error){
      dispatch(
        uiAction.showNotification({
          status:"error",
          title:"Error...",
          message:"Sending cart data Failed!"
        })
      )
    }
  }

}





