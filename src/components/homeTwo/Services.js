import Link from 'next/link';

import SingleService from './SingleService';

const Services = () => {
   return (
      <>
         <section className="services__area pb-110">
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

                  <SingleService color="blue-bg-4" img="1" title={<h3 className="services__title"><a href="#">No Risk,
                     <br /> Double Guarantee</a></h3>} />
                     
                  <SingleService color="pink-bg" img="2" title={<h3 className="services__title">
                     <Link href="/about">
                     <a >Flexible <br /> Prices no Surprises</a></Link></h3>} />

                  <SingleService color="green-bg" img="3" title={<h3 className="services__title">
                     <Link href="/about">
                     <a >Graphic <br /> Design Services</a></Link></h3>} />

                  <SingleService color="orange-bg" img="4" title={<h3 className="services__title">
                     <Link href="/about"><a >Updates <br /> Constant Development</a></Link></h3>} />
                  <SingleService color="blue-bg" img="5" title={<h3 className="services__title">
                     <Link href="/about">
                     <a >Friendly <br />Customer Support</a></Link></h3>} />

               </div>
            </div>
         </section>
      </>
   );
};

export default Services;