
import BgShape from '../../components/common/BgShape';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import SEO from '../../components/seo';
import SignUp from '../../components/SignUp/SignUp';

const Register = () => {
    return (
        <>
            <SEO pageTitle={'Sign Up'} />
            <Header />
            <BgShape />
            <SignUp />
            <Footer />
        </>
    );
};

export default Register;