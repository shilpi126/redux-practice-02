import './App.css';
import CartModal from './components/CartModal';
import Header from './components/Header';
import Product from './components/Product';
import store from './store';
import {Provider} from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <Header/>
     <div className='main'>
     <CartModal/>
     <Product/>
     </div>
    </Provider >
  );
}

export default App;
