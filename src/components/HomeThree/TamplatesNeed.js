import Link from 'next/link';


const TamplatesNeed = () => {
   const tamplateData = [
      {
         id: 1,
         icon_img: "/assets/img/icon/services/services-1.svg",
         bg_color: 'blue-bg-4',
         title: <h3 className="services__title"><a href="#">No Risk, <br /> Double Guarantee</a></h3>
      },
      {
         id: 2,
         icon_img: "/assets/img/icon/services/services-2.svg",
         bg_color: 'pink-bg',
         title: <h3 className="services__title"><Link href="/about"><a >Flexible <br /> Prices no Surprises</a></Link></h3>
      },
      {
         id: 3,
         icon_img: "/assets/img/icon/services/services-3.svg",
         bg_color: 'green-bg',
         title: <h3 className="services__title"><Link href="/about"><a >Graphic <br /> Design Services</a></Link></h3>
      },
      {
         id: 4,
         icon_img: "/assets/img/icon/services/services-4.svg",
         bg_color: 'orange-bg',
         title: <h3 className="services__title"><Link href="/about"><a >Updates <br /> Constant Development</a></Link></h3>
      },
      {
         id: 5,
         icon_img: "/assets/img/icon/services/services-5.svg",
         bg_color: 'blue-bg',
         title: <h3 className="services__title"><Link href="/about"><a >Friendly <br />Customer Support</a></Link></h3>
      },
   ]
   return (
      <>
         <section className="services__area pt-100 pb-110">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper mb-50 text-center">
                        <h2 className="section__title">The only one <br />Template you need</h2>
                        <p>From multipurpose themes to niche templates</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {
                     tamplateData.map(item => {
                        return <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                           <div className="services__item white-bg mb-30 wow fadeinup" data-wow-delay=".3s">
                              <div className="services__icon mb-45">
                                 <span className={item.bg_color}>
                                    <img src={item.icon_img} alt="" />
                                 </span>
                              </div>
                              <div className="services__content">
                                 {item.title}
                                 <p>Haggle down the pub off his nut arse bog bits and bobs bugger.</p>
                                 <Link href="/about" >
                                    <a className="link-btn">
                                       <i className="fas fa-long-arrow-alt-right"></i>
                                    Learn More</a>
                                 </Link>
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

export default TamplatesNeed;