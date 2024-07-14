import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import { specificBlog } from '../../redux/features/blogSlice';

const BlogSideBar = () => {
   const sidebarBlogs = useSelector(state => state.blogs.blogs);
   const dispatch = useDispatch();
   return (
      <>
         <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="blog__sidebar-wrapper  ml-30">
               <div className="blog__sidebar mb-30">
                  <div className="sidebar__widget mb-30">
                     <div className="sidebar__widget-content">
                        <div className="sidebar__search-wrapper">
                           <form action="#">
                              <input type="text" placeholder="Search ..." />
                              <button type="submit"><i className="fal fa-search"></i></button>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div className="sidebar__widget mb-30">
                     <div className="sidebar__widget-title">
                        <h3>Recent News</h3>
                     </div>
                     <div className="sidebar__widget-content">
                        <div className="rc__post-wrapper">

                           {
                              sidebarBlogs.slice(1, 4).map(blog => {
                                 return <div key={blog.id} className="rc__post d-flex align-items-center">
                                    <div className="rc__thumb mr-15" onClick={()=> dispatch(specificBlog(blog.id))}>
                                       <Link href="/blog-details">
                                          <a ><img src={blog.sm_img} alt="" /></a>
                                       </Link>
                                    </div>
                                    <div className="rc__content">
                                       <div className="rc__meta">
                                          <span>{blog.date}</span>
                                       </div>
                                       <h6 className="rc__title" onClick={()=> dispatch(specificBlog(blog.id))}>
                                          <Link href="/blog-details">
                                             <a >{blog.title.substring(0,40)}...</a>
                                          </Link>
                                       </h6>
                                    </div>
                                 </div>
                              })
                           }


                        </div>
                     </div>
                  </div>
                  <div className="sidebar__widget mb-30">
                     <div className="sidebar__widget-title">
                        <h3>Categories</h3>
                     </div>
                     <div className="sidebar__widget-content">
                        <div className="sidebar__catagory">
                           <ul>
                              <li><Link href="/blog"><a >Web Design (6)</a></Link></li>
                              <li><Link href="/blog"><a > Web Development (14)</a></Link></li>
                              <li><Link href="/blog"><a >Graphics (12)</a></Link></li>
                              <li><Link href="/blog"><a>IOS/Android Design (10)</a></Link></li>
                              <li><Link href="/blog"><a >App & Saas (4)</a></Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="sidebar__widget">
                     <div className="sidebar__widget-title">
                        <h3>Popular Tags</h3>
                     </div>
                     <div className="sidebar__widget-content">
                        <div className="tags">
                           <a href="#">Business</a>
                           <a href="#">Landing</a>
                           <a href="#">Design</a>
                           <a href="#">Digital</a>
                           <a href="#">Technology</a>
                           <a href="#">UI/UX</a>
                           <a href="#">Features</a>
                           <a href="#">Pix Saas Blog</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="sidebar__banner" style={{ background: `url(assets/img/banner/sidebar-banner.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <h4 className="sidebar__banner-title">Check Out <br />Our free Templates</h4>
                  <Link href="/product"><a className="m-btn m-btn-white"> <span></span> free template</a></Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default BlogSideBar;