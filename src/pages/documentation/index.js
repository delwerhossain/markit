import React from 'react';
import BgShape from '../../components/common/BgShape';
import Community from '../../components/Documentation/Community';
import Cta from '../../components/Documentation/Cta';
import DocumentationArea from '../../components/Documentation/DocumentationArea';
import LatestBlog from '../../components/Documentation/LatestBlog';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import SEO from '../../components/seo';

const Documentation = () => {
   return (
      <>
         <SEO pageTitle={'Documentation'} />
         <Header />
         <BgShape />
         <DocumentationArea />
         <LatestBlog />
         <Cta />
         <Community />
         <Footer />
      </>
   );
};

export default Documentation;