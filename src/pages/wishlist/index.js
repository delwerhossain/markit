
import BgShape from '../../components/common/BgShape';
import Breadcrumb from '../../components/common/Breadcrumb';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import SEO from '../../components/seo';
import WishListArea from '../../components/wishlist/WishListArea';

const WishList = () => {
   return (
      <>
         <SEO pageTitle={'Wishlist'} />
         <Header />
         <BgShape />
         <Breadcrumb name="Your Wishlist" title="Wishlist" />
         <WishListArea />
         <Footer />
      </>
   );
};

export default WishList;