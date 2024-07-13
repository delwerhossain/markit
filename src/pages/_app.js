import React from 'react';
import { Provider } from 'react-redux';
import 'react-responsive-modal/styles.css';
import './index.scss';
import { store } from '../redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initializeApp } from "firebase/app";
import SEO from '../components/seo';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}


const firebaseConfig = {
  apiKey: 'AIzaSyCOTzyD9nCW6DaO1sl0e0-4yuNSB0JKUNE',
  authDomain: 'markit-next-js.firebaseapp.com',
  projectId: 'markit-next-js',
  storageBucket: 'markit-next-js.appspot.com',
  messagingSenderId: '1068467809754',
  appId: '1:1068467809754:web:80ad8acdcc2670ce09a4e3',
};
initializeApp(firebaseConfig);


function MyApp({ Component, pageProps }) {

  return (
    <>
      <SEO font={'https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@300;400;500;600;700;800&display=swap'} />
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </>
  )
}

export default MyApp
