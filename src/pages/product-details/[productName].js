import { useRouter } from "next/router";
import BgShape from "../../components/common/BgShape";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import ProductDetailsArea from "../../components/ProductDetails/ProductDetailsArea";
import ProductTitle from "../../components/ProductDetails/ProductTitle";
import SEO from "../../components/seo";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const router = useRouter();
  const { productName } = router.query;

  const product = useSelector((state) =>
    state.products.products.find(
      (product) =>
        product.id ==
      productName
    )
  );
console.log({product});
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
