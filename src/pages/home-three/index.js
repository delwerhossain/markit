
import Subscribe from '../../components/Home/Subscribe';
import FeaturedItem from '../../components/HomeThree/FeaturedItem';
import FeaturedThemesProducts from '../../components/HomeThree/FeaturedThemesProducts';
import HomeThreeBlog from '../../components/HomeThree/HomeThreeBlog';
import HomeThreeHeader from '../../components/HomeThree/HomeThreeHeader';
import HomeThreeHeroArea from '../../components/HomeThree/HomeThreeHeroArea';
import NewestItems from '../../components/HomeThree/NewestItems';
import TamplatesNeed from '../../components/HomeThree/TamplatesNeed';
import Footer from '../../components/homeTwo/Footer';
import Testimonial from '../../components/homeTwo/Testimonial';
import PricingArea from '../../components/Pricing/PricingArea';
import SEO from '../../components/seo';

const index = () => {
   return (
      <>
         <SEO pageTitle={'Home Three'} />
         <HomeThreeHeader />
         <HomeThreeHeroArea />
         <FeaturedItem />
         <NewestItems />
         <FeaturedThemesProducts />
         <TamplatesNeed />
         <PricingArea />
         <Testimonial />
         <Subscribe />
         <HomeThreeBlog />
         <Footer />
      </>
   );
};

export default index;