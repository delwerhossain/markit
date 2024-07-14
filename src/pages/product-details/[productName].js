import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import BgShape from "../../components/common/BgShape";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import ProductDetailsArea from "../../components/ProductDetails/ProductDetailsArea";
import ProductTitle from "../../components/ProductDetails/ProductTitle";
import SEO from "../../components/seo";

const ProductDetails = () => {
  const router = useRouter();
  const { productName } = router.query;
  const products = useSelector((state) => state.products.products);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const foundProduct = products.find(
      (product) =>
        product.title.replace(/\s+/g, "-").toLowerCase() ===
        decodeURIComponent(productName).toLowerCase()
    );
    if (foundProduct) {
      setProduct(foundProduct);
    }
    setLoading(false);
  }, [productName, products]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <SEO pageTitle={"Product Details"} />
      <Header />
      <BgShape />
      <ProductTitle product={product} />
      <ProductDetailsArea product={product} />
      <Footer />
    </>
  );
};

export default ProductDetails;
