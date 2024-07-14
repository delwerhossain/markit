import Link from 'next/link';


const LatestBlog = () => {
   const blogData = [
      {
         id:1,
         text_1:'How do I purchase an item?',
         text_2:'How to download your items',
         text_3:'Licenses overview?',
         text_4:'Community jobs board.',
      },
      {
         id:2,
         text_1:'How to add a feature product',
         text_2:'Critique my site?',
         text_3:'How do I purchase an item?',
         text_4:'Marketing & SEO sdvice.',
      },
      {
         id:3,
         text_1:'Does the latest Stencil',
         text_2:'How do I purchase an item?',
         text_3:"I've Forgotten name or password",
         text_4:'Removal of royal mail from',
      },
      {
         id:4,
         text_1:'BigCommerce developers',
         text_2:'Apps & Integrations advice',
         text_3:"Theme support older stores",
         text_4:'Knowledge Base',
      },
      {
         id:5,
         text_1:'Tracking carrier option list',
         text_2:'Community Jobs Board',
         text_3:"How do I purchase an item?",
         text_4:'What is Item Support?',
      },
   ]
   return (
      <>
          <section className="blog__area pt-105 pb-110 grey-bg-2">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper mb-65">
                        <h2 className="section__title">Latest blog</h2>
                        <p>A load of old tosh the full monty sloshed pukka squiffy.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {
                     blogData.map(item => {
                        return  <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        <div className="blog__wrapper white-bg mb-30 transition-3">
                           <div className="blog__single">
                              <div className="blog__icon"></div>
                              <h3 className="blog__title">
                                 <Link href="/blog"><a >{item.text_1}</a></Link>
                              </h3>
                           </div>
                           <div className="blog__single">
                              <div className="blog__icon"></div>
                              <h3 className="blog__title">
                                 <Link href="/blog"><a >{item.text_2}</a></Link>
                              </h3>
                           </div>
                           <div className="blog__single">
                              <div className="blog__icon"></div>
                              <h3 className="blog__title">
                                 <Link href="/blog"><a >{item.text_3}</a></Link>
                              </h3>
                           </div>
                           <div className="blog__single">
                              <div className="blog__icon"></div>
                              <h3 className="blog__title">
                                 <Link href="/blog"><a >{item.text_4}</a></Link>
                              </h3>
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

export default LatestBlog;