import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import { specificBlog } from '../../redux/features/blogSlice';
import BlogSideBar from '../Blog/BlogSideBar';

const BlogDetailsArea = () => {
   const blogs = useSelector(state => state.blogs.blogs);
   const blogItem = useSelector(state => state.blogs.specificItem);
   //  dispatch
   const dispatch = useDispatch();
   return (
      <>
         <section className="page__title-area  pt-85">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="page__title-content mb-50">
                        <div className="postbox__meta d-flex">
                           <div className="postbox__tag-2">
                              {/* <a href="#">Digital,</a>
                              <a href="#">Marketing. </a> */}
                              <a href="#">{blogItem.category}</a>
                           </div>
                           <div className="postbox__time">
                              <span>4 min read</span>
                           </div>
                        </div>
                        <h2 className="page__title">{blogItem.title}</h2>
                        <div className="postbox__author-2 mt-20">
                           <ul className="d-flex align-items-center">
                              <li>
                                 <div className="postbox__author-thumb-2">
                                    <img src={blogItem.user_img} alt="" />
                                 </div>
                              </li>
                              <li>
                                 <h6><a href="#">{blogItem.name}</a></h6>
                                 <span><a href="#">View Profile</a></span>
                              </li>
                              <li>
                                 <h6>{blogItem.date}</h6>
                                 <span>Published</span>
                              </li>
                              <li className="d-none d-sm-block">
                                 <h6>Join the Conversation </h6>
                                 <span>2 comments</span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>


         {/*postbox__area  */}
         <section className="postbox__area pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div className="postbox__wrapper">
                        <div className="postbox__thumb postbox__thumb-2 fix w-img mb-30">
                           <a href="#"><img src={blogItem.img} alt="" /></a>
                        </div>
                        <div className="postbox__details mb-30">
                           <p className="drop-cap">Here’s a scenario — you’re participating in a user test for your favorite music app. At the end of the day, design is the manipulation of stimuli and information, so working with the stimuli.</p>
                           <p>Get stuffed mate David James Bond bleeder mush amongst bodge haggle Oxford, cup of char is faff about ummm I am <span className="highlight"><Link href="/about"><a >telling only a quid wellies</a></Link></span> my lady pear shaped up the kyver, I hunky-dory some dodgy chav I do not want no agro a codswallop he legged it. Blatant blower cobblers I the little rotter Jeffrey horse play, Richard the BBC bender that cockup Harry, starkers up the kyver the bees knees hunky-dory do not get shirty with me. Owt to do with me chap the little rotter cras starkers bugger all mate bleeder horse play David he nicked it, James Bond smashing mufty bonnet haggle Oxford knackered fanny around bog a, boot cuppa blower I dont want no agro <span className="highlight"><Link href="/about"><a >Eaton lost the plot</a></Link> </span> sloshed ummm I am telling. Hanky panky Harry burke butty Charles amongst tosser you mug, lemon squeezy <span className="highlight"><Link href="/about"><a >wellies cheesed off quaint</a></Link></span> pardon you old wind up bevvy, bugger all mate Oxford bonnet fanny around mush smashing. Cracking goal pukka what a load of rubbish a load of old tosh sloshed that Eaton James Bond, cor blimey guvnor the full monty chinwag bamboozled matie boy tinkety tonk old fruit Jeffrey hunky-dory, say the BBC brown bread dropped a clanger happy days the bees knees. Posh vagabond he legged it is lurgy knees up Elizabeth so I said only a quid, say smashing victoria sponge zonked grub bum bag matie boy my good sir.
                           </p>
                        </div>
                        <div className="postbox__details mb-30">
                           <h4>Words that make design go round</h4>
                           <p>Blow off grub get stuffed mate I knackered what a load of rubbish twit, chinwag up the duff a load of old tosh bobby brolly mush, spiffing good time bender porkies ruddy bleeder. Dont get shirt with me hanky panky happy days brilliant bevvy ummm Im telling a do one Why codswallop haggle, arse over tit lurgy car boot tinketygoal.!</p>
                        </div>
                        <div className="postbox__quote-2 mb-50">
                           <blockquote>
                              <h4>“Even if we can go very far in the detail of the user experience  terms of design, a bad copy can completely” </h4>
                              <span>Sophie Ianiro</span>
                           </blockquote>
                        </div>
                        <div className="postbox__thumb postbox__thumb-2 fix w-img mb-30">
                           <img src="assets/img/blog/blog-2.jpg" alt="" />
                        </div>
                        <div className="postbox__details mb-30">
                           <p>Owt to do with me chap the little rotter cras starkers bugger all mate bleeder horse play David he nicked it, James Bond smashing mufty bonnet haggle Oxford knackered fanny around bog a, boot cuppa blower I dont want no agro Eaton lost the plot sloshed ummm Iam telling. Hanky panky Harry burke butty Charles amongst tosser you mug, <span className="highlight">
                              <Link href="/about"><a >lemon squeezy wellies cheesed</a></Link></span> off quaint pardon you old wind up bevvy, bugger all mate Oxford bonnet fanny around mush smashing. Cracking goal pukka what a load of rubbish a load</p>
                        </div>
                        <div className="postbox__details mb-45">
                           <h4>Introducing the new Markit</h4>

                           <div className="postbox__list">
                              <ol>
                                 <li>Amazon Handmade</li>
                                 <li>Your own stand-alone website (powered by Shopify, Weebly, Big Cartel etc)</li>
                                 <li>Your Instagram feed</li>
                                 <li>Offline at your local markets</li>
                                 <li>Plus many more channels…</li>
                              </ol>
                           </div>
                        </div>
                        <div className="postbox__tag postbox__tag-3 d-sm-flex mb-25">
                           <h5>Tagged with:</h5>
                           <a href="#">Business</a>
                           <a href="#">Landing</a>
                           <a href="#">Design</a>
                           <a href="#">UI/UX</a>
                        </div>
                        <div className="postbox__share m-social mb-80">
                           <h5>The share</h5>
                           <ul>
                              <li><a href="#" className="fb"><i className="fab fa-facebook-f"></i></a></li>
                              <li><a href="#" className="tw"><i className="fab fa-twitter"></i></a></li>
                              <li><a href="#" className="pin"><i className="fab fa-pinterest-p"></i></a></li>
                              <li><a href="#" className="link"><i className="fab fa-linkedin-in"></i></a></li>
                           </ul>
                        </div>
                        <div className="postbox__author-3 d-sm-flex grey-bg-2 mb-85">
                           <div className="postbox__author-thumb-3 mr-20">
                              <img src="assets/img/blog/author/blog-author-5.jpg" alt="" />
                           </div>
                           <div className="postbox__author-content">
                              <h4>Justin Case</h4>
                              <p>James Bond cheers barney the little rotter I do not want no agro gutted mate
                                 smashing cheeky pear shaped, mufty super.</p>
                           </div>
                        </div>
                        <div className="postbox__recent mb-60">
                           <h4>Recent Posts</h4>

                           <div className="row">
                              {
                                 blogs.slice(4, 6).map((blog, index) => {
                                    return <div key={index} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                       <div className="blog__single-2 white-bg mb-30">
                                          <div className="blog__thumb-2 w-img mb-20">
                                             <Link href="/blog-details">
                                                <a >
                                                   <img src={blog.img} alt="" />
                                                </a>
                                             </Link>
                                          </div>
                                          <div className="blog__content-2">
                                             <div className="postbox__meta d-flex">
                                                <div className="postbox__tag-2">
                                                   <a href="#">Digital,</a>
                                                   <a href="#">Marketing. </a>
                                                </div>
                                                <div className="postbox__time">
                                                   <span>4 min read</span>
                                                </div>
                                             </div>
                                             <h3 className="blog__title-2">
                                                <Link href="/blog-details">
                                                   <a onClick={() => dispatch(specificBlog(blog.id))}>
                                                      {blog.title.substring(0, 41)}...</a>
                                                </Link>
                                             </h3>
                                             <p>Jeffrey arse over tit give us a bell old posh morish wellies cheeky.</p>
                                             <Link href="/blog-details">
                                                <a className="link-btn"><i className="fal fa-arrow-right"></i>read more</a>
                                             </Link>
                                          </div>
                                       </div>
                                    </div>
                                 })
                              }


                           </div>
                        </div>
                        <div className="latest-comments mb-55">
                           <h3 >2 Comments</h3>
                           <ul>
                              <li>
                                 <div className="comments-box grey-bg-2">
                                    <div className="comments-info d-flex">
                                       <div className="comments-avatar mr-15">
                                          <img src="assets/img/product/support/sup-1.jpg" alt="" />
                                       </div>
                                       <div className="avatar-name">
                                          <h5>Jason Response</h5>
                                          <span className="post-meta"> March 24, 2020 at 12:23 pm</span>
                                       </div>
                                    </div>
                                    <div className="comments-text ml-65">
                                       <p>Up the duff a gosh cup of tea lemon squeezy bleeder victoria sponge haggle, cheers wellies bugger hotpot vagabond spiffing.!</p>
                                       <div className="comments-replay">
                                          <a href="#"><i className="fal fa-reply"></i>Reply</a>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                              <li className="children">
                                 <div className="comments-box grey-bg-2">
                                    <div className="comments-info d-flex">
                                       <div className="comments-avatar mr-15">
                                          <img src="assets/img/product/support/sup-2.jpg" alt="" />
                                       </div>
                                       <div className="avatar-name">
                                          <h5>Hilary Ouse</h5>
                                          <span className="post-meta">April 06, 2021 at 06:19 pm </span>
                                       </div>
                                    </div>
                                    <div className="comments-text ml-65">
                                       <p>Nancy boy gutted mate smashing naff hanky panky grub down the pub  lost his bottle, cockup buggered.!</p>
                                       <div className="comments-replay">
                                          <a href="#"><i className="fal fa-reply"></i>Reply</a>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </div>
                        <div className="comment__wrapper p-relative white-bg">
                           <div className="comment__shape">
                              <img className="circle" src="assets/img/icon/sign/circle.png" alt="" />
                              <img className="zigzag" src="assets/img/icon/sign/zigzag.png" alt="" />
                              <img className="dot" src="assets/img/icon/sign/dot.png" alt="" />
                           </div>
                           <h3>Post a comment</h3>
                           <p>{"Jolly good bevvy butty it's all gone to pot that quaint so I said cheers."}</p>
                           <div className="comment__form mt-35">
                              <form action="#">
                                 <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                       <div className="comment__input-wrapper mb-25">
                                          <h5>Full Name</h5>
                                          <div className="comment__input">
                                             <input required type="text" placeholder="Full name" />
                                             <i className="fal fa-user"></i>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                       <div className="comment__input-wrapper mb-25">
                                          <h5>Work email</h5>
                                          <div className="comment__input">
                                             <input required type="text" placeholder="e-mail address" />
                                             <i className="fal fa-envelope"></i>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                       <div className="comment__input-wrapper mb-25">
                                          <h5>Company Name</h5>
                                          <div className="comment__input">
                                             <input required type="text" placeholder="Company Name" />
                                             <i className="fal fa-smile"></i>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                       <div className="comment__input-wrapper mb-25">
                                          <h5>Website</h5>
                                          <div className="comment__input">
                                             <input required type="text" placeholder="Website" />
                                             <i className="fal fa-globe"></i>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="row">
                                    <div className="col-xxl-12">
                                       <div className="comment__input-wrapper mb-25">
                                          <h5>Message</h5>
                                          <div className="comment__input textarea">
                                             <textarea required placeholder="Tell us a bil about your project"></textarea>
                                             <i className="fal fa-comment"></i>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="row">
                                    <div className="col-xxl-12">
                                       <button type="submit" className="m-btn m-btn-4"> <span></span> submit </button>
                                    </div>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>

                  <BlogSideBar />

               </div>
            </div>
         </section>
      </>
   );
};

export default BlogDetailsArea;