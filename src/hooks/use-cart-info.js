import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCartProduct } from "../redux/features/productSlice";


const useCartInfo = () => {
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const cartItems = useSelector(selectCartProduct);

  useEffect(() => {
    const cart = cartItems.reduce((cartTotal, cartItem) => {
      const { price, cartQuantity } = cartItem;
      const itemTotal = price * cartQuantity;
      cartTotal.total += itemTotal
      cartTotal.quantity += cartQuantity

      return cartTotal;
    }, {
      total: 0,
      quantity: 0,
    })
    setQuantity(cart.quantity);
    setTotal(cart.total);
  }, [cartItems])

  return {
    quantity,
    total,
  }
 
}

export default useCartInfo;