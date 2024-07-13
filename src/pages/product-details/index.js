import React from 'react';
import BgShape from '../../components/common/BgShape';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import ProductDetailsArea from '../../components/ProductDetails/ProductDetailsArea';
import ProductTitle from '../../components/ProductDetails/ProductTitle';
import SEO from '../../components/seo';

const ProductDetails = () => {
   return (
      <>
         <SEO pageTitle={'Product Details'} />
         <Header />
         <BgShape />
         <ProductTitle />
         <ProductDetailsArea />
         <Footer />
      </>
   );
};

export default ProductDetails;