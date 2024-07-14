import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import { specificItem } from '../../redux/features/productSlice';

const TrendingLandmark = () => {
   const trendingItems = useSelector((state) => state.products.products);
   const dispatch = useDispatch();
   // handleDetailsProduct
   const handleDetailsProduct = (id) => {
      dispatch(specificItem(id))
   }
   return (
      <>
         <section className="trending__area pt-110 pb-110 grey-bg">
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
                        <Link href="/product"><a  className="m-btn m-btn-border"><span></span>Explore Cloneables</a></Link>
                     </div>
                  </div>
               </div>
               <div className="row">

                  {
                     trendingItems.slice(0,9).map((trending, index) => {
                        return <div key={index} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                           <div className="trending__item d-sm-flex white-bg mb-30 wow fadeInUp" data-wow-delay=".3s">
                              <div className="trending__thumb mr-25">
                                 <div onClick={()=>handleDetailsProduct(trending.id)} className="trending__thumb-inner fix">
                                    <Link href='/product-details'>
                                       <a >
                                          <img src={trending.img} alt="" />
                                       </a>
                                    </Link>
                                 </div>
                              </div>
                              <div className="trending__content">
                                 <h3 onClick={()=>handleDetailsProduct(trending.id)} className="trending__title">
                                    <Link href="/product-details"><a >{trending.title}</a></Link>
                                 </h3>
                                 <p>Knees up arse blimey say happy days.</p>
                                 <div className="trending__meta d-flex justify-content-between">
                                    <div className="trending__tag">
                                       <a href="#">{trending.category}</a>
                                    </div>
                                    <div className="trending__price">
                                       <span>{`৳${trending.price}`}</span>
                                    </div>
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

export default TrendingLandmark;