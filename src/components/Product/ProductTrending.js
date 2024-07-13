import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { specificItem } from '../../redux/features/productSlice';

const ProductTrending = () => {
   const productTrending = useSelector(state => state.products.products);
   const dispatch = useDispatch();
   return (
      <>
         <section className="trending__area pt-110 pb-110">
            <div className="container">
               <div className="row align-items-end">
                  <div className="col-xxl-6 col-xl-6 col-lg col-md-8">
                     <div className="section__title-wrapper mb-50">
                        <h2 className="section__title">Trending <br /> Landmark Themes</h2>
                        <p>Jeffrey pardon me jolly good.</p>
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg col-md-4">
                     <div className="trending__more d-flex justify-content-md-end  mb-50">
                        <Link href="/product">
                           <a className="m-btn m-btn-border"><span></span>Explore Cloneables</a>
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {
                     productTrending.slice(0, 6).map((product, index) => {
                        return <div key={index} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                           <div className="trending__item trending__item-2 d-sm-flex align-items-center transition-3 mb-30 wow fadeInUp" data-wow-delay=".3s">
                              <div className="trending__thumb mr-25">
                                 <div className="trending__thumb-inner fix" onClick={()=> dispatch(specificItem(product.id))}>
                                    <Link href="/product-details">
                                       <a >
                                          <img src={product?.img} alt="" />
                                       </a>
                                    </Link>
                                 </div>
                              </div>
                              <div className="trending__content">
                                 <div className="trending__tag trending__tag-2">
                                    <a href="#">{product?.category}</a>
                                 </div>
                                 <h3 onClick={()=> dispatch(specificItem(product.id))} className="trending__title trending__title-2">
                                    {/* <Link href="/product-details"> <a >{product?.title}</a></Link> */}
                                    <Link href="/product-details">{product?.title}</Link>
                                 </h3>
                                 <div className="trending__author">
                                    <p>by <a href="#">Themepure</a></p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     })
                  }

               </div>
            </div>
         </section>
      </>
   );
};

export default ProductTrending;