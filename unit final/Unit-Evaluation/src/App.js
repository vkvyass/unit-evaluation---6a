import './App.css';

 import Login from './component/login';
import Home from './component/home';
import Products from './component/products';
import Nav from './component/navbar';
import Cart from './component/cart';


import { Routes,Route } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import{additem,deleteitem} from './features/cart'
function App() {
  const cart=useSelector((s)=>s.Cart.value)
  console.log(additem,deleteitem)
  return (
    <>
    <Routes>
<Route path='/' element={<Nav />}>
<Route index element={ <Home />} />
<Route path='/login' element={<Login />}/>
<Route path='/cart' element={<Cart />}/>
<Route path='/product/:id' element={<Products />}/>
  

</Route>


    </Routes>
    
    </>
  );
}

export default App;