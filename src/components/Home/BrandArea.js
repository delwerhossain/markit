import Slider from "react-slick";
import SingleBrand from "./SingleBrand";

const BrandArea = ({spacing = ''}) => {
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2,
      arrow: false,
      responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 1,
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
             initialSlide: 2
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
       ]
    };
   return (
      <>
          <div className={`brand__area pb-15 ${spacing && spacing}`}>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <Slider {...settings} className="brand__slider wow fadeInUp" data-wow-delay=".5s">
                        <SingleBrand image="1" />
                        <SingleBrand image="2" />
                        <SingleBrand image="3" />
                        <SingleBrand image="4" />
                        <SingleBrand image="5" />
                        <SingleBrand image="1" />
                        <SingleBrand image="3" />
                        <SingleBrand image="5" />
                     </Slider>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default BrandArea;