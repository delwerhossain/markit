import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import productsData from '../../data/productData';
import Swal from 'sweetalert2';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: productsData,
    allUniqueCategory: [...new Set(productsData.map(category => category.category))],
    allUniqueTag: [...new Set(productsData.map(tag => tag.tag))],
    specificProduct: productsData[0],

    addToCart: typeof window !== 'undefined' && localStorage.getItem('addToCart') ?
      JSON.parse(localStorage.getItem('addToCart')) : [],

    wishlist: typeof window !== 'undefined' && localStorage.getItem('addToWishList') ?
      JSON.parse(localStorage.getItem('addToWishList')) : [],

    loading: false, // Initial loading state
  },
  reducers: {
    // specificProduct
    specificItem: (state, { payload }) => {
      state.specificProduct = state.products.find(product => product.id === payload);
    },
    // addToProduct
    addToProduct: (state, { payload }) => {
      state.loading = true; // Set loading state true
      const itemIndex = state.addToCart.findIndex((item) => item.id === payload.id);
      if (itemIndex >= 0) {
        state.addToCart[itemIndex].cartQuantity += 1;
        toast.info('Increase Product Quantity', {
          position: 'top-left'
        });
      } else {
        const tempProduct = { ...payload, cartQuantity: 1 };
        state.addToCart.push(tempProduct);
        toast.success(`${payload.title} added to cart`, {
          position: 'top-left'
        });
      }

      localStorage.setItem('addToCart', JSON.stringify(state.addToCart));
      state.loading = false; // Reset loading state
    },
    // removeProduct
    removeProduct: (state, { payload }) => {
      state.loading = true; // Set loading state true
      state.addToCart = state.addToCart.filter((cart) => cart.id !== payload);
      toast.error(`Remove from your cart`, {
        position: 'top-left'
      });

      localStorage.setItem('addToCart', JSON.stringify(state.addToCart));
      state.loading = false; // Reset loading state
    },
    // decreaseCart
    decreaseCart: (state, { payload }) => {
      state.loading = true; // Set loading state true
      const itemIndexNumber = state.addToCart.findIndex(cartItem => cartItem.id === payload.id);

      if (state.addToCart[itemIndexNumber].cartQuantity > 1) {
        state.addToCart[itemIndexNumber].cartQuantity -= 1;

        toast.error(`Decreased cart quantity`, {
          position: 'top-left'
        });
      } else if (state.addToCart[itemIndexNumber].cartQuantity === 1) {
        state.addToCart = state.addToCart.filter((cart) => cart.id !== payload.id);
        toast.error(`${payload.title} remove from cart`, {
          position: 'top-left'
        });
      }

      localStorage.setItem('addToCart', JSON.stringify(state.addToCart));
      state.loading = false; // Reset loading state
    },

    // clear cart
    clearCart: (state, action) => {
      state.loading = true; // Set loading state true
      state.addToCart = [];
      localStorage.setItem('addToCart', JSON.stringify(state.addToCart));
      state.loading = false; // Reset loading state
    },
    // add wish list product
    addToWishList: (state, { payload }) => {
      state.loading = true; // Set loading state true
      state.wishlist.push(payload);
      Swal.fire({
        icon: 'success',
        title: `${payload.title} `,
        text: 'Added to your wishlist',
      });
      localStorage.setItem('addToWishList', JSON.stringify(state.wishlist));
      state.loading = false; // Reset loading state
    },
    // remove wishlist product
    removeWishListProduct: (state, { payload }) => {
      state.loading = true; // Set loading state true
      state.wishlist = state.wishlist.filter(product => product.id !== payload.id);
      toast.error(`${payload.title} remove from your wishlist`, {
        position: 'top-left'
      });

      localStorage.setItem('addToWishList', JSON.stringify(state.wishlist));
      state.loading = false; // Reset loading state
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  addToProduct,
  removeProduct,
  decreaseCart,
  specificItem,
  clearCart,
  addToWishList,
  removeWishListProduct
} = productSlice.actions;

export const selectCartProduct = (state) => state.products.addToCart;
export default productSlice.reducer;
