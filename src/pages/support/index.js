
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import SEO from '../../components/seo';
import BlogArea from '../../components/support/BlogArea';
import CtaArea from '../../components/support/CtaArea';
import FaqArea from '../../components/support/FaqArea';
import SupportArea from '../../components/support/SupportArea';

const Support = () => {
   return (
      <>
      <SEO pageTitle={'Support'} />

      <Header/>
         {/*  bg shape area start  */}
         <div className="bg-shape">
            <img src="assets/img/shape/shape-1.png" alt=""/>
         </div>
         {/* bg shape area end  */}
         <SupportArea/>
         <FaqArea/>
         <BlogArea/>
         <CtaArea/>
         <Footer/>
      </>
   );
};

export default Support;