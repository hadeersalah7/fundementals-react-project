import Navbar from "./components/Navbar";
import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calcTotals } from "./fetature/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const {cartItems} = useSelector((state) => state.cart)
  const { isOpen } = useSelector((state) => state.modal)

const dispatch = useDispatch()
useEffect(() => {
dispatch(calcTotals())
},[cartItems])

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
