import Slider from "react-slick";

const Testimonial = () => {
   // slick setting
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 2
            }
         },
      ]
   };
   //  data
   const testimonialData = [
      {
         id: 1,
         img: 'assets/img/testimonial/testi-1.jpg',
         name: 'Justin Case',
         title: '@justin'
      },
      {
         id: 2,
         img: 'assets/img/testimonial/testi-2.jpg',
         name: 'Gunther Beard',
         title: '@beard'
      },
      {
         id: 3,
         img: 'assets/img/testimonial/testi-3.jpg',
         name: 'Shahnewaz Sakil',
         title: '@shahnewaz'
      },
      {
         id: 4,
         img: 'assets/img/testimonial/testi-4.jpg',
         name: 'Shamiha Islam',
         title: '@shamiha'
      },
   ]
   return (
      <>
         <section className="testimonial__area pt-105 pb-120 fix">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper mb-115 text-center">
                        <h2 className="section__title">What our <br />Customers have to say</h2>
                        <p>Curabitur lacus arcu, sodales in quam sed, commodo efficitur ligula.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="testimonial__wrapper p-relative pb-135 wow fadeInUp" data-wow-delay=".5s">
                        <div className="testimonial__shape">
                           <img src="assets/img/testimonial/testimonial-shape.png" alt="" />
                        </div>

                        <Slider {...settings} className="testimonial__slider-2">
                           {
                              testimonialData.map(testimonial => {
                                 return <div key={testimonial.id} className="testimonial__item-2">
                                    <div className="testimonial__person-wrapper">
                                       <div className="testimonial__person d-flex">
                                          <div className="testimonial__avater">
                                             <img src={testimonial.img} alt="" />
                                          </div>
                                          <div className="testimonial__info ml-15">
                                             <h5>{testimonial.name}</h5>
                                             <span>{testimonial.title}</span>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="testimonial__text testimonial__text-2 white-bg mt--40">
                                       <div className="rating mb-5">
                                          <ul>
                                             <li><a href="#"><i className="fas fa-star"></i></a></li>
                                             <li><a href="#"><i className="fas fa-star"></i></a></li>
                                             <li><a href="#"><i className="fas fa-star"></i></a></li>
                                             <li><a href="#"><i className="fas fa-star"></i></a></li>
                                             <li><a href="#"><i className="fas fa-star"></i></a></li>
                                          </ul>
                                       </div>
                                       <p>Up the duff crikey argy-bargy in my flat is faff about victoria sponge brolly the lurgy bubble and squeak bogstandard you mug bloke pardon you mush.</p>
                                    </div>
                                 </div>
                              })
                           }
                        </Slider>

                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Testimonial;