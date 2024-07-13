import Link from 'next/link';
import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import Collapsible from 'react-collapsible';
import { useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';


const SidebarMenu = ({ show, handleClose }) => {
   const totalCartQuantity = useSelector(state => state.products.cartTotalQuantity);
   const { user, logout } = useAuth();
   return (
      <>

         <div >
            <Offcanvas show={show} onHide={handleClose} placement='end' className='side__bar'>
               <Offcanvas.Header closeButton>
                  <div className="logo">
                     <Link href="/home">
                        <a>
                           <img src="assets/img/logo/logo-white.png" alt="logo" />
                        </a>
                     </Link>
                  </div>
               </Offcanvas.Header>

               <Offcanvas.Body>

                  <div className="">
                     <div className="">

                        <div className="sidebar__content">

                           <div className="mobile-menu">
                              <nav id="mobile-menu">
                                 <ul>
                                    <Collapsible trigger={<Link href="/home">Home</Link>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                       <ul className="sidebar_sub_menu submenu text-white">
                                          <li><Link href="/home"><a >Home Wordpress</a></Link></li>
                                          <li><Link href="/homeTwo"><a >Home Plugins</a></Link></li>
                                          <li><Link href="/home-three"><a >Home Market</a></Link></li>
                                       </ul>
                                    </Collapsible>

                                    <Collapsible trigger={<Link href="/product">Themes</Link>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                       <ul className="sidebar_sub_menu submenu text-white">
                                          <li><Link href="/product"><a>Product</a></Link></li>
                                          <li><Link href="/product-details"><a>Product Details</a></Link></li>
                                       </ul>
                                    </Collapsible>

                                    <div className='single_link iconAdd '>
                                       <li><Link href="/product"><a>HTML</a></Link></li>
                                    </div>

                                    <div className='single_link iconAdd'>
                                       <li><Link href="/support"><a>Support</a></Link></li>
                                    </div>

                                    <Collapsible trigger={<Link href="/product">Pages</Link>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                       <ul className="sidebar_sub_menu submenu text-white">
                                          <li><Link href="/about"><a >About</a></Link></li>
                                          <li><Link href="/documentation"><a >Documentation</a></Link></li>
                                          <li><Link href="/cart"><a >Cart Page</a></Link></li>
                                          <li><Link href="/wishlist"><a >Wishlist</a></Link></li>
                                          <li><Link href="/checkout"><a >Checkout</a></Link></li>
                                          <li><Link href="/pricing"><a >Pricing</a></Link></li>
                                          <li><Link href="/sign-up"><a >Sign Up</a></Link></li>
                                          <li><Link href="/login"><a >Log In</a></Link></li>
                                       </ul>
                                    </Collapsible>

                                    <Collapsible trigger={<Link href="/blog">Blog</Link>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                       <ul className="sidebar_sub_menu submenu text-white">
                                          <li><Link href="/blog"><a >Blog</a></Link></li>
                                          <li><Link href="/blog-details"><a >Blog Details</a></Link></li>
                                       </ul>
                                    </Collapsible>

                                    <div className='single_link iconAdd border-0'>
                                       <li><Link href="/contact"><a >Contact</a></Link></li>
                                    </div>

                                 </ul>
                              </nav>
                           </div>

                           <div className="sidebar__action d-flex align-items-center">
                              <div className="sidebar__login mt-15">
                                 {user?.email ? < a onClick={logout} style={{ cursor: 'pointer' }} className='d-flex align-items-center'> <i className="fal fa-sign-out-alt"></i> Log Out</a> :
                                    <Link href="/login">
                                       < a> <i className="far fa-unlock"></i> Log In</a>
                                    </Link>}
                              </div>
                              <div className="sidebar__cart mt-20">
                                 <Link href="/cart">
                                    <a className="cart-toggle-btn">
                                       <i className="far fa-shopping-cart"></i>
                                       <span>{totalCartQuantity}</span>
                                    </a>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default SidebarMenu;