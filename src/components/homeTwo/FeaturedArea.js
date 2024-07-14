import Link from 'next/link';


const FeaturedArea = () => {
   return (
      <>
         <section className="featured__area pt-105 pb-95">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper mb-50">
                        <h2 className="section__title">Featured Themes</h2>
                        <p>Find over 7000 website templates and themes.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                     <div className="featured__item grey-bg-17 mb-30 wow fadeInUp" data-wow-delay=".3s">
                        <h3 className="featured__title"><Link href="/product"><a >WordPress Themes</a></Link></h3>
                        <p>Thousands of WebCloudor Brands have made the swich.Text marketing with the customer in mind!</p>

                        <div className="featured__thumb w-img">
                           <Link href="/product">
                              <a >
                                 <img src="/assets/img/product/theme/theme-1.jpg" alt="" />
                              </a>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                     <div className="featured__item grey-bg-18 mb-30 wow fadeInUp" data-wow-delay=".5s">
                        <h3 className="featured__title"><Link href="/product"><a>WordPress Plugins</a></Link></h3>
                        <p>Thousands of WebCloudor Brands have made the swich.Text marketing with the customer in mind!</p>

                        <div className="featured__thumb w-img">
                           <Link href="/product">
                              <a >
                                 <img src="/assets/img/product/theme/theme-2.jpg" alt="" />
                              </a>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default FeaturedArea;