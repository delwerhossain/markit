import Link from 'next/link';

import { useDispatch } from 'react-redux';
import {removeProduct, specificItem } from '../../redux/features/productSlice';


const SingleCart = ({ cart,handleDecreaseCart,handleIncreaseCart,handleRemoveProduct }) => {
   const dispatch = useDispatch();
   
   return (
      <tr>
         <td className="product-thumbnail">
            <Link href="/product-details">
               <a onClick={dispatch(specificItem(cart.id))}>
                  <img src={"/" + cart?.img} alt="" />
               </a>
            </Link>
         </td>
         <td className="product-name">
            <Link href="/product-details"><a onClick={dispatch(specificItem(cart.id))}>{cart?.title}</a></Link>
         </td>
         <td className="product-price"><span className="amount">${cart?.price}</span></td>
         <td className="product-quantity">
            <div className="cart-plus-minus">
               <span>{cart?.cartQuantity}</span>
               {/* <input onChange={handleValue} type="text" value={value} /> */}
               <div onClick={() => handleDecreaseCart(cart)} className="dec qtybutton">-</div>
               <div onClick={() => handleIncreaseCart(cart)} className="inc qtybutton" >+</div>
            </div>
         </td>
         <td className="product-subtotal"><span className="amount">${cart?.price * cart?.cartQuantity}</span></td>
         <td style={{ cursor: 'pointer' }} onClick={() => handleRemoveProduct(cart?.id)} className="product-remove"><a><i className="fa fa-times"></i></a></td>
      </tr>
   );
};

export default SingleCart;