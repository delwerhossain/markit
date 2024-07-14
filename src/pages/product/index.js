import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BgShape from '../../components/common/BgShape';
import Pagination from '../../components/common/Pagination';
import BannerArea from '../../components/Home/BannerArea';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import Subscribe from '../../components/Home/Subscribe';
import ProductTrending from '../../components/Product/ProductTrending';
import SEO from '../../components/seo';
import { addToProduct, specificItem } from '../../redux/features/productSlice';
import Image from 'next/image';

const Product = () => {
  // all products
  // let products = useSelector(state => state.products.products);
  const [products, setProducts] = useState(useSelector(state => state.products.products));
  const [filterProducts, setFilterProducts] = useState(useSelector(state => state.products.products));
  const [uniqueTag, setUniqueTag] = useState(useSelector(state => state.products.allUniqueTag));
  const [checkbox, setCheckBox] = useState('');
  const [categoryTag, setCategoryTag] = useState('');
  // unique category
  const productsCategory = useSelector(state => state.products.allUniqueCategory);
  // dispaych
  const dispatch = useDispatch();
  // currentpage
  const [currentPage, setCurrentPage] = useState(1);
  // product per page
  const [productPerPage, setProductPerPage] = useState(4);
  // index of last product
  const indexOfLastProduct = currentPage * productPerPage;
  // index of first product
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  // current products
  let currentProducts = filterProducts.slice(checkbox ? 0 : indexOfFirstProduct, checkbox ? filterProducts.length : indexOfLastProduct);
  // paginate
  const paginate = (number) => {
    setCurrentPage(number);
  };
  // handleClick
  const handleClick = (product) => {
    dispatch(addToProduct(product))
  }
  // handleProductDetails
  const handleProductDetails = (id) => {
    dispatch(specificItem(id))
  }
  // handleCategory
  const handleCategory = (category) => {
    setCheckBox(category)
    const newProduct = products.filter(product => product.category === category);
    setFilterProducts(newProduct);
  }
  // handleTag
  const handleTag = (tag) => {
    setCheckBox(tag);
    const newProduct = products.filter(product => product.tag === tag);
    setFilterProducts(newProduct)
  }

  return (
    <>
      <SEO pageTitle={'Product'} />
      {/*  Header start  */}
      <Header />
      {/* Header end */}

      {/*  bg shape area start  */}
      <BgShape />
      {/* bg shape area end */}

      <section className="product__area po-rel-z1 pt-100 pb-115 grey-bg">
        <div className="container">
          <div className="row">

            <div className="col-xxl-4 col-xl-4 col-lg-4 order-lg-first order-last">
              <div className="product__sidebar mr-30">
                <div className="product__sidebar-widget  white-bg mb-30">
                  <div className="sidebar__widget mb-20">
                    <form >
                      <div className="sidebar__widget-head d-flex align-items-center justify-content-between">
                        <h4 className="sidebar__widget-title">Category</h4>
                        <button type="submit" className="sidebar__clear-btn"><i className="fal fa-repeat"></i>Clear</button>
                      </div>
                      <div className="sidebar__widget-content">
                        <div className="sidebar__check-wrapper sidebar__tag">
                          <ul>
                            {
                              productsCategory.map((category, index) => {
                                return <li key={index} className="d-flex justify-content-between align-items-center">
                                  {category !== undefined && <>
                                    <div className="sidebar__check d-flex align-items-center">
                                      <span className='d-flex align-items-center'
                                        onClick={() => handleCategory(category)} >
                                        <input className="m-check-input" type="checkbox" readOnly
                                          checked={checkbox === category ? 'checked' : ''} />
                                        <label className="m-check-label">  {category} </label>
                                      </span>
                                    </div>
                                    {/* <span>76</span> */}
                                  </>
                                  }
                                </li>
                              })
                            }
                          </ul>

                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="sidebar__widget">
                    <form>
                      <div className="sidebar__widget-head d-flex align-items-center justify-content-between">
                        <h4 className="sidebar__widget-title">Tags</h4>
                        <button type="submit" className="sidebar__clear-btn"><i className="fal fa-repeat"></i>Clear</button>
                      </div>
                      <div className="sidebar__widget-content">
                        <div className="sidebar__check-wrapper sidebar__tag">
                          <ul>
                            {
                              uniqueTag.map((tag, index) => {
                                return <li key={index} className="d-flex justify-content-between align-items-center">
                                  <div className="sidebar__check d-flex align-items-center text-capitalize">
                                    {/* <input className="m-check-input" type="checkbox"  />
                                    <label className="m-check-label">{tag}</label> */}
                                    <span className='d-flex align-items-center'
                                      onClick={() => handleTag(tag)} >
                                      <input className="m-check-input" type="checkbox" readOnly
                                        checked={checkbox === tag ? 'checked' : ''} />
                                      <label className="m-check-label">  {tag} </label>
                                    </span>
                                  </div>
                                  {/* <span>28</span> */}
                                </li>
                              })
                            }

                          </ul>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="sidebar__banner" style={{ background: `url(assets/img/banner/sidebar-banner.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} >
                  <h4 className="sidebar__banner-title">Check Out <br />Our free Templates</h4>
                  <Link href="/product">
                    <a className="m-btn m-btn-white"> <span></span> free template</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="row">

                {
                  currentProducts.map((item, index) => {
                    return <div key={index} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div className="product__item white-bg mb-30 wow fadeInUp" data-wow-delay=".3s">
                        <div className="product__thumb">
                          <div className="product__thumb-inner fix w-img">
                          <Link href={`/product-details/${encodeURIComponent(item.title.replace(/\s+/g, '-'))}`}>
                              <a >
                                <Image width={500} height={400} src={item?.img_big} alt="" />
                              </a>
                            </Link>
                          </div>
                          <div className="product__thumb-btn transition-3">
                        
                              <a style={{cursor:'pointer'}} onClick={() => handleClick(item)} className="m-btn m-btn-6 mb-15">
                                Add To Cart
                              </a>
                     
                            <a rel="noreferrer" href="https://themehtmlForest.net/item/zibber-business-consulting-wordpress-theme/30120392" target="_blank" className="m-btn m-btn-7">
                              Preview Project
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                            <div className="product__tag">
                              <a href="#">{item?.category}</a>
                            </div>
                            <div className="product__price">
                              <span>৳{item?.price}</span>
                            </div>
                          </div>
                          <h3 onClick={() => handleProductDetails(item.id)} className="product__title">
                          <Link href={`/product-details/${encodeURIComponent(item.title.replace(/\s+/g, '-'))}`}>
                              <a >{item?.title}...</a>
                            </Link>
                          </h3>
                          <p className="product__author">by <a href="#">WebCloudor</a> in <a href="#">Templates</a></p>
                        </div>
                      </div>
                    </div>
                  })
                }


              </div>

              {!checkbox && <div className="row">
                <Pagination productPerPage={productPerPage} totalProduct={filterProducts.length}
                  paginate={paginate} currentPage={currentPage} />
              </div>}

            </div>
          </div>
        </div>
      </section>

      {/* product trending start */}
      <ProductTrending />
      {/* product trending end */}

      {/* banner area start */}
      <BannerArea />
      {/* banner area end */}

      {/* cta area start */}
      <Subscribe />
      {/* cta area end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </>
  );
};

export default Product;