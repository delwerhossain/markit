
import BgShape from '../../components/common/BgShape';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import LoginArea from '../../components/Login/LoginArea';
import SEO from '../../components/seo';

const Login = () => {
    return (
        <>
            <SEO pageTitle={'Login'} />
            <Header />
            <BgShape />
            <LoginArea />
            <Footer />
        </>
    );
};

export default Login;