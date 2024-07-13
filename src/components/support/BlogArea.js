import React from 'react';
import SingleBlog from './SingleBlog';

const BlogArea = () => {
   return (
      <>
            <section className="blog__area pt-105 pb-110">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-11 offset-xxl-1">
                     <div className="section__title-wrapper mb-65">
                        <h2 className="section__title">Latest blog</h2>
                        <p>A load of old tosh the full monty sloshed pukka squiffy.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-11 offset-xxl-1 col-xl-11">
                     <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                          
                           <SingleBlog title="He lost his bottle hanky panky that super mufty spiffing bobby pardon me geeza lemon." />

                           <SingleBlog title="Oxford super are you taking the piss me old mucker boot owt to do with me the bee's knees." />

                           <SingleBlog title="David, it's your round wellies sloshed only a quid bubble and squeak mufty chap." />

                           <SingleBlog title="Jeffrey faff about A bit of how's your father he lost his bottle, butty cras skive off I give." />
                          
                        </div>

                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">

                        <SingleBlog title="Jeffrey faff about A bit of how's your father he lost his bottle, butty cras skive off I give." />

                        <SingleBlog title="Lurgy don't get shirty with me blower posh porkies spend a penny tickety boo mufty ." />

                        <SingleBlog title="He lost his bottle hanky panky that super mufty spiffing bobby pardon me geeza lemon." />

                        <SingleBlog title="Oxford super are you taking the piss me old mucker boot owt to do with me the bee's knees." />
                        
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default BlogArea;