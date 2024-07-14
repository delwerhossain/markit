import Link from 'next/link';


const BlogBreadCrumb = () => {
   return (
      <>
         <section className="page__title-area  pt-85">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="page__title-content mb-50">
                        <h2 className="page__title">Latest From The Blog</h2>
                        <nav aria-label="breadcrumb">
                           <ol className="breadcrumb">
                              <li className="breadcrumb-item"><Link href="/home"><a >Home</a></Link></li>
                              <li className="breadcrumb-item active" aria-current="page">Blog</li>
                           </ol>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default BlogBreadCrumb;