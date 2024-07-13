import React from 'react';
import { useSelector } from 'react-redux';
import useCartInfo from '../../hooks/use-cart-info';


const Order = () => {
   const cartItems = useSelector(state => state.products.addToCart);
   const cartTotal = useSelector((state) => state.products.cartTotalAmount);
   const {total} = useCartInfo();
   
   return (
      <>
         <div className="col-lg-6">
            <div className="your-order mb-30 ">
               <h3>Your order</h3>
               <div className="your-order-table table-responsive">
                  <table>
                     <thead>
                        <tr>
                           <th className="product-name">Product</th>
                           <th className="product-total text-center">Total</th>
                        </tr>
                     </thead>
                     <tbody className='border-0'>
                        {
                           cartItems.map((cart,index) => {
                              return <tr key={index} className="cart_item">
                              <td className="product-name">
                                 {cart.title} <strong className="product-quantity"> × {cart.cartQuantity}</strong>
                              </td>
                              <td className="product-total text-center">
                                 <span className="amount">${cart.price * cart.cartQuantity}</span>
                              </td>
                           </tr>
                           })
                        }
                    
                     </tbody>

                     <tfoot >
                        <tr className="order-total">
                           <th>Subtotal</th>
                           <td className='text-center'><strong ><span className="amount">${total}</span></strong></td>
                        </tr>
                        <tr className="order-total">
                          <th>Total</th>
                           <td className='text-center'><strong><span className="amount">${total}</span></strong></td>
                        </tr>
                     </tfoot>

                  </table>
               </div>

               <div className="payment-method">
                  <div className="accordion" id="checkoutAccordion">
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="checkoutOne">
                           <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#bankOne" aria-expanded="true" aria-controls="bankOne">
                              Direct Bank Transfer
                           </button>
                        </h2>
                        <div id="bankOne" className="accordion-collapse collapse show" aria-labelledby="checkoutOne" data-bs-parent="#checkoutAccordion">
                           <div className="accordion-body">
                              <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                           </div>
                        </div>
                     </div>
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="paymentTwo">
                           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#payment" aria-expanded="false" aria-controls="payment">
                              Cheque Payment
                           </button>
                        </h2>
                        <div id="payment" className="accordion-collapse collapse" aria-labelledby="paymentTwo" data-bs-parent="#checkoutAccordion">
                           <div className="accordion-body">
                              <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                           </div>
                        </div>
                     </div>
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="paypalThree">
                           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#paypal" aria-expanded="false" aria-controls="paypal">
                              PayPal
                           </button>
                        </h2>
                        <div id="paypal" className="accordion-collapse collapse" aria-labelledby="paypalThree" data-bs-parent="#checkoutAccordion">
                           <div className="accordion-body">
                              <p>Pay via PayPal; you can pay with your credit card if you don’t have a
                                 PayPal account.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="order-button-payment mt-20">
                     <button type="submit" className="m-btn m-btn-border-2 cta__btn active">
                     Place order</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Order;