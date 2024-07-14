import Link from "next/link";

const Footer = () => {
   return (
      <>
         <footer>
            <div className="footer__area footer-bg-2">
               <div className="footer__top pt-90 pb-50">
                  <div className="container">
                     <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                           <div className="footer__widget mb-40 wow fadeInUp" data-wow-delay=".3s">
                              <div className="footer__widget-head mb-35">
                                 <Link href="/home">
                                    <a >
                                       <img src="/assets/img/logo/logo.png" alt="" />
                                    </a>
                                 </Link>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__social mb-30">
                                    <h4>Follow our Socials</h4>
                                    <ul>
                                       <li><a href="#" className="fb"><i className="fab fa-facebook-f"></i></a></li>
                                       <li><a href="#" className="tw"><i className="fab fa-twitter"></i></a></li>
                                       <li><a href="#" className="pin"><i className="fab fa-pinterest-p"></i></a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6">
                           <div className="footer__widget mb-40 wow fadeInUp" data-wow-delay=".5s">
                              <div className="footer__widget-head">
                                 <h4 className="footer__widget-title footer__widget-title-2">Products</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__link footer__link-2">
                                    <ul>
                                       <li><a href="#">Tutor LMS </a></li>
                                       <li><a href="#">WP Mega Menu </a></li>
                                       <li><a href="#">WP Page Builder </a></li>
                                       <li><a href="#">Themes</a></li>
                                       <li><a href="#">Interactions</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                           <div className="footer__widget mb-40 wow fadeInUp footer__widget-pl-70" data-wow-delay=".7s">
                              <div className="footer__widget-head">
                                 <h4 className="footer__widget-title footer__widget-title-2">Resources</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__link footer__link-2">
                                    <ul>
                                       <li><a href="#">Promotion </a></li>
                                       <li><a href="#">Submit Content</a></li>
                                       <li><a href="#">Resources</a></li>
                                       <li><a href="#">Design System</a></li>
                                       <li><a href="#">Expert</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-3 col-lg-3 col-md-5 col-sm-6">
                           <div className="footer__widget mb-40 wow fadeInUp footer__widget-sub-pl-70" data-wow-delay=".7s">
                              <div className="footer__widget-head">
                                 <h4 className="footer__widget-title footer__widget-title-2">Newsletter</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__subscribe">
                                    <p>Subscribe to recieve a monthly email on the latest news!</p>
                                    <div className="footer__subscribe-input">
                                       <form action="#">
                                          <input type="email" placeholder="Email" />
                                          <button type="submit" className="m-btn">Subscribe!</button>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="footer__bottom">
                  <div className="container">
                     <div className="footer__bottom-inner footer__bottom-inner-2">
                        <div className="row">
                           <div className="col-xxl-6 col-xl-6 col-md-6">
                              <div className="footer__copyright footer__copyright-2 wow fadeInUp" data-wow-delay=".5s">
                                 <p>Copyright © 2022 All Rights Reserved, Design by <a href="#">WebCloudor</a></p>
                              </div>
                           </div>
                           <div className="col-xxl-6 col-xl-6 col-md-6">
                              <div className="footer__bottom-link footer__bottom-link-2 wow fadeInUp text-md-end" data-wow-delay=".8s">
                                 <ul>
                                    <li><a href="#">Licence</a></li>
                                    <li><a href="#">Privacy Policy </a></li>
                                    <li><a href="#">Affiliate Notice</a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;