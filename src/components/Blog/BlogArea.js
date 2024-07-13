import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../common/Pagination';
import BlogSideBar from './BlogSideBar';
import SingleBlog from './SingleBlog';


const BlogArea = () => {
   // all blogs
   const blogs = useSelector(state => state.blogs.blogs);
   // current page
   const [currentPage, setCurrentPage] = useState(1);
   // blog per page 
   const [blogPerPage, setBlogperPage] = useState(2);
   // index of last page 
   const indexOfLastPage = currentPage * blogPerPage;
   // index of first page
   const indexOfFirstPage = indexOfLastPage - blogPerPage;
   // currentBlogs
   const currentBlogs = blogs.slice(indexOfFirstPage, indexOfLastPage);
   // paginate
   const paginate = (number) => {
      setCurrentPage(number)
   }
   
   return (
      <>

         <section className="postbox__area pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div className="postbox__wrapper">

                        {
                           currentBlogs.map(blog => <SingleBlog key={blog.id} blog={blog} />)
                        }

                        <Pagination productPerPage={blogPerPage} totalProduct={blogs.length}
                           paginate={paginate} currentPage={currentPage} />

                     </div>
                  </div>

                  <BlogSideBar />
               </div>
            </div>
         </section>
      </>
   );
};

export default BlogArea;