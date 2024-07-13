import React from 'react';
import BgShape from '../../components/common/BgShape';
import ContactArea from '../../components/Contact/ContactArea';
import ContactInfo from '../../components/Contact/ContactInfo';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import SEO from '../../components/seo';

const Contact = () => {
   return (
      <>
         <SEO pageTitle={'Contact'} />
         <Header />
         <BgShape />
         <ContactArea />
         <ContactInfo />
         <Footer />
      </>
   );
};

export default Contact;