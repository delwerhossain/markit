import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleCart from '../../components/Cart/SingleCart';
import Breadcrumb from '../../components/common/Breadcrumb';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';
import Header from '../../components/Home/Header';
import { addToProduct, clearCart, decreaseCart, getTotal, removeProduct } from '../../redux/features/productSlice';
// import { toast } from 'react-toastify';
import Footer from '../../components/Home/Footer';
import Link from 'next/link';
import Swal from 'sweetalert2';
import BgShape from '../../components/common/BgShape';
import useCartInfo from '../../hooks/use-cart-info';
import SEO from '../../components/seo';

const ProductCart = () => {
   const [mountedCart, setMountedCart] = useState(false);
   const [errorMsg, setErrorMsg] = useState(false);
   const cartItem = useSelector((state) => state.products.addToCart);
   const cartTotal = useSelector((state) => state.products.cartTotalAmount);
   const dispatch = useDispatch();
   const { total } = useCartInfo();

   // cartItem
   useEffect(() => {
      if (cartItem.length > 0) {
         setMountedCart(true);
         setErrorMsg(false);
      }
      if (cartItem.length === 0) {
         setErrorMsg(true);
         setMountedCart(false)
      }
   }, [cartItem, mountedCart, errorMsg])

   // handleSubmit
   const handleSubmit = (e) => {
      e.preventDefault();
      Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Coupon not available this time',
      })
   }
   // handleClearCart
   const handleClearCart = () => {
      Swal.fire({
         title: 'Are you sure?',
         text: "Deleted your all cart items",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
         if (result.isConfirmed) {
            dispatch(clearCart());
            setMountedCart(false);
            Swal.fire(
               'Deleted!',
               'Your cart items has been deleted.',
               'success'
            )
         }
      })
   }


   // handleDecreaseCart
   const handleDecreaseCart = (cart) => {
      dispatch(decreaseCart(cart))
      if (cart.cartQuantity === 1) {
         setMountedCart(false)
      }
   }

   // handleIncreaseCart
   const handleIncreaseCart = (cart) => {
      dispatch(addToProduct(cart))
   }

   // handle remove product
   const handleRemoveProduct = (id) => {
      dispatch(removeProduct(id));
   }

   return (
      <>
         <SEO pageTitle={'Cart'} />
         <Header />
         <BgShape />
         <Breadcrumb name="Your Cart" title="Cart" />
         {errorMsg && <ErrorMsg />}
         {mountedCart && <section className="cart-area pb-100">
            <div className="container">
               <div className="row">

                  <div className="col-12">
                     <form onSubmit={handleSubmit}>
                        <div className="table-content table-responsive">
                           <table className="table">
                              <thead>
                                 <tr>
                                    <th className="product-thumbnail">Images</th>
                                    <th className="cart-product-name">Product</th>
                                    <th className="product-price">Unit Price</th>
                                    <th className="product-quantity">Quantity</th>
                                    <th className="product-subtotal">Total</th>
                                    <th className="product-remove">Remove</th>
                                 </tr>
                              </thead>
                              <tbody className='border-0'>
                                 {
                                    cartItem.map((item, index) => <SingleCart key={index} cart={item}
                                       handleIncreaseCart={handleIncreaseCart} handleDecreaseCart={handleDecreaseCart}
                                       handleRemoveProduct={handleRemoveProduct} />)
                                 }

                              </tbody>
                           </table>
                        </div>

                        <div className="row">
                           <div className="col-12">
                              <div className="coupon-all">
                                 <div className="coupon">
                                    <input id="coupon_code" required className="input-text" name="coupon_code" defaultValue="" placeholder="Coupon code" type="text" />
                                    <button className="m-btn m-btn-border-2 cta__btn active" name="apply_coupon" type="submit">Apply coupon</button>
                                 </div>
                                 <div className="coupon2">
                                    <button onClick={handleClearCart} className="m-btn m-btn-border-2 cta__btn active" name="update_cart" type="button">Clear cart</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="row justify-content-end">
                           <div className="col-md-5">
                              <div className="cart-page-total">
                                 <h2>Cart totals</h2>
                                 <ul className="mb-20">
                                    <li>Subtotal <span>৳{total}</span></li>
                                    <li>Total <span>৳{total}</span></li>
                                 </ul>
                                 <Link href="/checkout">
                                    <a className="m-btn m-btn-border-2 cta__btn active">Proceed to checkout</a>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </section>}

         {/* footer */}
         <Footer />
      </>
   );
};

export default ProductCart;