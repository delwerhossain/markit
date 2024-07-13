import { configureStore } from '@reduxjs/toolkit';
import productSlice from './features/productSlice';
import  blogSlice  from './features/blogSlice';
// import AuthProvider from '../hooks/useFirebase';

export const store = configureStore({
  reducer: {
    products:productSlice,
    blogs:blogSlice,
    // auth:AuthProvider(),
  },
})