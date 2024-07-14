import Link from 'next/link';


const DocumentationArea = () => {
   const ducumentData = [
      {
         id: 1,
         title: 'Getting Started',
         bgClass: 'gradient-pink'
      },
      {
         id: 2,
         title: 'Knowledge Base',
         bgClass: 'gradient-blue'
      },
      {
         id: 3,
         title: 'Templates',
         bgClass: 'gradient-orange'
      },
      {
         id: 4,
         title: 'News & Updates',
         bgClass: 'gradient-purple'
      },
   ]
   return (
      <>
         <section className="documentation__area pt-100 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3">
                     <div className="page__title-wrapper text-center mb-60">
                        <h2 className="page__title-2">Search <br />Documentation</h2>
                        <p>Lets Find what You Are Looking For!</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                     <div className="documentation__search text-center mb-90">
                        <form action="#">
                           <div className="documentation__search-inner d-sm-flex justify-content-center align-items-center">
                              <div className="documentation__search-input">
                                 <span><i className="far fa-search"></i></span>
                                 <input type="text" placeholder="Search Documentation..." />
                              </div>
                              <button type="submit" className="m-btn ml-20"> <span></span> search</button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
               <div className="row">

                  {
                     ducumentData.map((item, index) => {
                        return <div key={index} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                           <div className={`documentation__item ${item.bgClass} mb-30 transition-3 text-center`}>
                              <div className="documentation__icon mb-30">
                                 <img src="assets/img/icon/documentation/shop-bag.png" alt="" />
                              </div>
                              <div className="documentation__content">
                                 <h3 className="documentation__title">
                                    <Link href="/contact"><a >{item.title}</a></Link>
                                 </h3>
                                 <p>Do one on your bike mate why geeza chancer.</p>
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
                           <img src="assets/img/support/profile/s-p-1.jpg" alt="" />
                           <img src="assets/img/support/profile/s-p-2.jpg" alt="" />
                           <img src="assets/img/support/profile/s-p-3.jpg" alt="" />
                           <img src="assets/img/support/profile/s-p-4.jpg" alt="" />
                        </a>
                        <p>Contact us directly at <a href="mailto:support@markit.com">support@markit.com</a> </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default DocumentationArea;