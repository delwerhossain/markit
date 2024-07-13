import Link from 'next/link';
import React from 'react';

const FeaturedItem = () => {
   const itemsData = [
      {
         id: 1,
         img: 'assets/img/icon/magento.svg',
         name: 'Magento',
         itemNumber: '200k Items'
      },
      {
         id: 2,
         img: 'assets/img/icon/prestashop.png',
         name: 'Prestashop',
         itemNumber: '12k Items'
      },
      {
         id: 3,
         img: 'assets/img/icon/wordpress.svg',
         name: 'WordPress Themes',
         itemNumber: '500k Items'
      },
      {
         id: 4,
         img: 'assets/img/icon/shopify.svg',
         name: 'shopify',
         itemNumber: '10k Items'
      },
   ]
   return (
      <>
         <section className="overlay-top">
            <div className="container">
               <div className="row">
                  {
                     itemsData.map(item => {
                        return <div key={item.id} className="col-lg-3 col-md-3 col-sm-6">
                           <div className="mt_cat shadow">
                              <div className="mt_cat_avater">
                                 <img src={item.img} className="img-fluid" alt="" />
                              </div>
                              <div className="mt_cat_caps">
                                 <h3 className="mt_cat_title">
                                    <Link href="/product"><a >{item.name}</a></Link>
                                 </h3>
                                 <span>{item.itemNumber}</span>
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

export default FeaturedItem;