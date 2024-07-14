import Link from 'next/link';


const SupportArea = () => {
   const supportData = [
      {
         id:1,
         icon_img:'assets/img/support/suport-1.png',
         title:'Customer Support'
      },
      {
         id:2,
         icon_img:'assets/img/support/suport-2.png',
         title:'Need Customization'
      },
      {
         id:3,
         icon_img:'assets/img/support/suport-3.png',
         title:'Support Includes'
      },
   ]
   return (
      <>
         <section className="support__area po-rel-z1 pt-100 pb-100">
            <div className="support__shape wow fadeInLeft" data-wow-delay=".9s">
               <img src="/assets/img/bg/support-bg.png" alt=""/>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3">
                     <div className="page__title-wrapper text-center mb-60">
                        <h2 className="page__title-2">Welcome! <br/>How can we help?</h2>
                        <p>Our support forums and make your support experience better.</p>
                     </div>
                  </div>
               </div>
               <div className="row">

                  {
                     supportData.map((support) => {
                        return  <div key={support.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        <div className="support__item mb-30 text-center white-bg transition-3  wow fadeInUp" data-wow-delay=".7s">
                           <div className="support__icon mb-30 d-flex justify-content-center align-items-end">
                              <img src={support.icon_img} alt=""/>
                           </div>
                           <div className="support__content">
                              <h3 className="support__title">{support.title}</h3>
                              <p>Oxford smashing Harry spend a penny get stuffed mate cup of char It is your round.</p>
                              <Link href="/contact"><a className="m-btn m-btn-border m-btn-border-3">Submit Ticket</a></Link>
                           </div>
                        </div>
                     </div>
                     })
                  }

               </div>
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="support__thumb text-center mt-40">
                        <a href="#">
                           <img src="/assets/img/support/profile/s-p-1.jpg" alt=""/>
                           <img src="/assets/img/support/profile/s-p-2.jpg" alt=""/>
                           <img src="/assets/img/support/profile/s-p-3.jpg" alt=""/>
                           <img src="/assets/img/support/profile/s-p-4.jpg" alt=""/>
                        </a>
                        <p>Contact us directly at <a href="mailto:support@webcloudor.com">support@webcloudor.com</a> </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default SupportArea;