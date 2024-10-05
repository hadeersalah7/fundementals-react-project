import Navbar from "./components/Navbar";
import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calcTotals, getCartItem } from "./fetature/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const {cartItems, isLoading} = useSelector((state) => state.cart)
  const { isOpen } = useSelector((state) => state.modal)

const dispatch = useDispatch()
useEffect(() => {
dispatch(calcTotals())
},[cartItems])

useEffect(() => {
  dispatch(getCartItem())
}, [])

if(isLoading){
  return <div className="loading">
    <h1>Loading....</h1>
  </div>
}

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
