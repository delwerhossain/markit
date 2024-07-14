
import { useSelector } from 'react-redux';
import SingleProduct from './SingleProduct';

const LatestProduct = () => {
   const latestProduct = useSelector(state => state.products.products);
   return (
      <>
         <section className="product__area grey-bg-16 pt-105 pb-110">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper mb-50 text-center">
                        <h2 className="section__title">Latest <br/> Premium Products</h2>
                        <p>From multipurpose themes to niche templates</p>
                     </div>
                  </div>
               </div>
               <div className="row">

                  {
                     latestProduct.slice(15,21).map((product,index) => <SingleProduct key={index} product={product} />)
                  }
                  
               </div>
            </div>
         </section>
      </>
   );
};

export default LatestProduct;