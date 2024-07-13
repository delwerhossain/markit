import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { specificBlog } from '../../redux/features/blogSlice';

const HomeThreeBlog = () => {
   const blogs = useSelector(state => state.blogs.blogs);
   // dispatch
   const dispatch = useDispatch();
   return (
      <>
         <div className="latest-news-area pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper text-center mb-60">
                        <h2 className="section__title">Latest from Blog</h2>
                        <p>From multipurpose themes to niche templates</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {
                     blogs.slice(0, 3).map((blog, index) => {
                        return <div key={index} className="col-xl-4 col-lg-4 col-md-6">
                           <div className="latest-blog mb-30">
                              <div className="latest-blog-img pos-rel">
                                 <img src={blog.img} alt="" />
                                 <div className="top-date">
                                    <Link href="/blog-details"><a onClick={() => dispatch(specificBlog(blog.id))}>{blog.date}</a></Link>
                                 </div>
                              </div>
                              <div className="latest-blog-content">
                                 <div className="latest-post-meta mb-15">
                                    <span><Link href="/blog-details"><a onClick={() => dispatch(specificBlog(blog.id))}>
                                       <i className="far fa-user"></i> Diboli </a></Link></span>
                                    <span><Link href="/blog-details"><a onClick={() => dispatch(specificBlog(blog.id))}>
                                       <i className="far fa-comments"></i> 23 Comments</a></Link></span>
                                 </div>
                                 <h3 className="latest-blog-title">
                                    <Link href="/blog-details">
                                       <a onClick={() => dispatch(specificBlog(blog.id))}>
                                          {blog.title.substring(0, 41)}...</a>
                                    </Link>
                                 </h3>
                                 <p>Haggle down the pub off his nut arse bog bits and bobs bugger.</p>
                                 <div className="blog-arrow">
                                    <Link href="/blog-details" >
                                       <a onClick={() => dispatch(specificBlog(blog.id))}>Read More</a>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     })
                  }


               </div>
            </div>
         </div>
      </>
   );
};

export default HomeThreeBlog;