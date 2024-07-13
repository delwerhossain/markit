import Link from 'next/link';
import React from 'react';

const CtaArea = () => {
   return (
      <>
         <section className="cta__area pb-145">
            <div className="container">
               <div className="cta__bg cta__inner pt-90 pb-90">
                  <div className="row">
                     <div className="col-xxl-6 offset-xxl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <div className="section__title-wrapper text-center mb-45 wow fadeInUp" data-wow-delay=".3s">
                           <h2 className="section__title text-white">Join The Community</h2>
                           <p className="text-white opacity-7">Thousands of Markit Brands have made the swich.Text marketing with the customer in mind!</p>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-xxl-6 offset-xxl-3">
                        <div className="cta__content text-center wow fadeInUp" data-wow-delay=".5s">
                           <Link href="/pricing"><a className="m-btn m-btn-white-2 cta__btn"> <span></span> Start 14 Day Free Trial</a></Link>
                           <Link href="/pricing"><a className="m-btn m-btn-border-4 cta__btn"> <span></span> Claim Free Demo</a></Link>
                           <p className="text-white opacity-7">Start Sending Texts - No Credit Card Necessary</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default CtaArea;