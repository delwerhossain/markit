import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { specificBlog } from '../../redux/features/blogSlice';
import { Modal } from 'react-responsive-modal';
import ReactPlayer from "react-player";

const SingleBlog = ({ blog }) => {
   // video open state
   const [open, setOpen] = useState(false);
   const onOpenModal = () => setOpen(true);
   const onCloseModal = () => setOpen(false);
   // distructure items
   const { id, img, title, desc, name, user_img, date, videoPopup, category } = blog;
   // dispatch
   const dispatch = useDispatch();
   // handleBlogDetails
   const handleBlogDetails = () => {
      dispatch(specificBlog(id))
   }
   return (
      <>

         <article className="postbox__item  format-video fix mb-50 wow fadeInUp" data-wow-delay=".5s">
            <div className="postbox__thumb postbox__video">
               <Link href="/blog-details">
                  <a onClick={handleBlogDetails} className="w-img">
                     <img src={img} alt="" />
                  </a>
               </Link>
               {/* {videoPopup && <div className="postbox__play">
                  <button onClick={()=> setOpen(true)} data-fancybox ><i className="fas fa-play"></i></button>
               </div>} */}
               {videoPopup && <div className="postbox__play">
                  <button onClick={onOpenModal}><i className="fas fa-play"></i></button>
                  <Modal
                     open={open}
                     onClose={onCloseModal}
                     styles={{
                        modal: {
                           maxWidth: "unset",
                           width: "70%",
                           padding: "unset"
                        },
                        overlay: {
                           background: "rgba(0, 0, 0, 0.5)"
                        },
                        closeButton: {
                           background: "yellow"
                        }
                     }}
                     center
                  >
                     <ReactPlayer
                        url="https://youtu.be/es4x5R-rV9s"
                        width="100%"
                        height="calc(100vh - 100px)"
                     />
                  </Modal>
               </div>}
            </div>
            <div className="postbox__content">
               <div className="postbox__meta d-flex mb-10">
                  <div className="postbox__tag mr-20">
                     <a href="#">{category}</a>
                  </div>
                  <div className="postbox__date">
                     <span><i className="fal fa-clock"></i>{date}</span>
                  </div>
               </div>
               <h3 onClick={handleBlogDetails} className="postbox__title mb-15">
                  <Link href="/blog-details">
                     <a >{title}</a>
                  </Link>
               </h3>
               <div className="postbox__text mb-20">
                  <p>{desc}</p>
               </div>
               <div className="postbox__author d-flex align-items-center">
                  <div className="postbox__author-thumb mr-15">
                     <img src={user_img} alt="" />
                  </div>
                  <h5>Post by <a href="#">{name}</a> </h5>

               </div>
            </div>
         </article>
      </>
   );
};

export default SingleBlog;