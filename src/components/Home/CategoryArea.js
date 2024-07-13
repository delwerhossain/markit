import Link from "next/link";

const categoryData = [
   {
      id: 1,
      img: 'assets/img/icon/catagory/cat-1.png',
      title: 'WordPress Themes'
   },
   {
      id: 2,
      img: 'assets/img/icon/catagory/cat-2.png',
      title: 'Site Templates'
   },
   {
      id: 3,
      img: 'assets/img/icon/catagory/cat-3.png',
      title: 'UI Templates'
   },
   {
      id: 4,
      img: 'assets/img/icon/catagory/cat-4.png',
      title: 'Digital Marketing'
   },
]

const CategoryArea = () => {
   return (
      <>
         <section className="category__area pt-105 pb-135">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper text-center mb-60">
                        <h2 className="section__title">Browse <br /> Popular Categories</h2>
                        <p>Find over 7000 website templates and themes.</p>
                     </div>
                  </div>
               </div>
               <div className="row">

                  {
                     categoryData.map((category, index) => {
                        return <div key={index} className="col-xxl-3 col-xl-3 col-md-6 col-sm-6">
                           <div className="category__item transition-3 text-center white-bg mb-30 wow fadeInUp" data-wow-delay=".3s" >
                              <div className="category__icon mb-25">
                                 <a href="#"><img src={category.img} alt="" /></a>
                              </div>
                              <div className="category__content">
                                 <h3 className="category__title">
                                    <Link href="/product"><a >{category.title}</a></Link>
                                 </h3>
                                 <Link href="/product">
                                    <a className="link-btn">
                                       <i className="far fa-long-arrow-right"></i>
                                       Learn More
                                    </a>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     })
                  }

               </div>
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="category__more mt-30 text-center">
                        <Link href="/product">
                           <a className="m-btn m-btn-2"> <span></span> View all categories</a>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default CategoryArea;