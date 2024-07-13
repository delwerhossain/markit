import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToProduct, addToWishList, specificItem } from '../../redux/features/productSlice';

const FeaturedThemesProducts = () => {
   const featuredProducts = useSelector(state => state.products.products);
   // dispatch
   const dispatch = useDispatch();
   // handleAddToCart
   const handleAddToCart = (product) => {
      dispatch(addToProduct(product))
   }
   // handleProductDetails
   const handleProductDetails = (id) => {
      dispatch(specificItem(id))
   }
   // handleClick
   const handleClick = (product) => {
      dispatch(addToWishList(product))
   }
   return (
      <>
         <section className="product__area pt-105 pb-110 grey-bg-2">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper text-center mb-60">
                        <h2 className="section__title">Featured Themes of The Month</h2>
                        <p>From multipurpose themes to niche templates</p>
                     </div>
                  </div>
               </div>
               <div className="row">

                  {
                     featuredProducts.slice(9, 15).map((product, index) => {
                        return <div key={index} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                           <div className="product__item white-bg mb-30 wow fadeInUp" data-wow-delay=".3s">
                              <div className="product__thumb">
                                 <div className="product__thumb-inner fix w-img">
                                    <Link href="/product-details">
                                       <a >
                                          <img src={product.img} alt="" />
                                       </a>
                                    </Link>
                                 </div>
                                 <div className="product__thumb-btn transition-3">

                                    <a style={{cursor:'pointer'}} onClick={() => handleAddToCart(product)} className="m-btn m-btn-6 mb-15">
                                       Add to Cart
                                    </a>

                                    <Link href="/product-details">
                                       <a onClick={() => handleProductDetails(product.id)} className="m-btn m-btn-7">
                                          Details
                                       </a>
                                    </Link>
                                 </div>
                              </div>
                              <div className="product__content">
                                 <h3 className="product__title product__title2">
                                    <Link href="/product-details">
                                       <a onClick={() => handleProductDetails(product.id)}>{product.title}</a>
                                    </Link>
                                 </h3>
                                 <p className="product__author">by <a href="#">Theme Pure</a> in <a href="#">Templates</a></p>
                                 <div className="product__ratings">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                 </div>
                                 <div className="product__meta d-flex justify-content-between align-items-end mt-15">
                                    <div className="product__price">
                                       <span>${product.price}</span>
                                       <p>{product.sale} Sale</p>
                                    </div>
                                    <div className="product__action-btn">
                                       <a className="link_prview" target="_blank" rel="noreferrer" href="https://themeforest.net/item/zibber-business-consulting-wordpress-theme/30120392">Preview</a>
                                       <button onClick={() => handleClick(product)} className="link_heart"><i className="fal fa-heart"></i></button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     })
                  }

               </div>

               <div className="row">
                  <div className="col-xxl-12">
                     <div className="product__more text-center mt-30">
                        <Link href="/product">
                           <a className="m-btn m-btn-2"> <span></span> Explore Premium</a>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default FeaturedThemesProducts;