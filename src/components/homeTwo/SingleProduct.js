import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToProduct, specificItem } from "../../redux/features/productSlice";

const SingleProduct = ({ product }) => {
   const dispatch = useDispatch();
   // handleDetailsProduct
   const handleDetailsProduct = (id) => {
      dispatch(specificItem(id))
   }
   // handleCart
   const handleCart = (product) => {
      dispatch(addToProduct(product))
   }
   return (
      <>
         <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div className="product__item-2 white-bg mb-30 fix wow fadeInUp" data-wow-delay=".3s">
               <div className={`product__thumb-2 ${product?.gradientColor} p-relative text-center fix`}>
                  <img className="product-icon" src={"/" + product?.img} alt="" />
                  <div className="product__thumb-2-shape">
                     <img src="assets/img/product/icon/product-circle.png" alt="" />
                  </div>
               </div>
               <div className="product__content-2 text-center">
                  <div className="product__icon mb-20">
                     <span><img src={"/" + product?.logo} alt="" /></span>
                  </div>
                  <h3 className="product__title-2" onClick={() => handleDetailsProduct(product.id)}>
                     <Link href="/product-details"><a >{product?.title}</a></Link>
                  </h3>
                  <p>Posh super burke a blinding  morish bits and bob nice one baking,</p>

                  <div className="product__btn mt-25">

                     <a style={{ cursor: 'pointer' }} onClick={() => handleCart(product)} 
                     className="m-btn m-btn-5"> <span></span> Add To Cart </a>

                     <Link href='/product-details'>
                        <a onClick={() => handleDetailsProduct(product.id)} className="m-btn m-btn-border m-btn-border-6">
                           <span></span> details </a>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default SingleProduct;