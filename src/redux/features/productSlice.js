import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import productsData from '../../data/productData';
import Swal from 'sweetalert2';


export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: productsData,
    allUniqueCategory : [...new Set(productsData.map(category => category.category))],
    allUniqueTag : [...new Set(productsData.map(tag => tag.tag))],
    specificProduct:productsData[0],

    addToCart: typeof window !== 'undefined' && localStorage.getItem('addToCart') ? 
    JSON.parse(localStorage.getItem('addToCart')) : [],

    wishlist:typeof window !== 'undefined' && localStorage.getItem('addToWishList') ? 
    JSON.parse(localStorage.getItem('addToWishList')) : [],
  },
  reducers: {
    // specificProduct
    specificItem:(state,{payload}) => {
      state.specificProduct = state.products.find(product => product.id === payload)
    },
    // addToProduct
    addToProduct: (state, { payload }) => {
      const itemIndex = state.addToCart.findIndex((item) => item.id === payload.id);
      if (itemIndex >= 0) {
        state.addToCart[itemIndex].cartQuantity += 1
        toast.info('Increase Product Quantity', {
          position: 'top-left'
        })
      }
      else {
        const tempProduct = { ...payload, cartQuantity: 1 };
        state.addToCart.push(tempProduct)
        toast.success(`${payload.title} added to cart`, {
          position: 'top-left'
        })
      }

      localStorage.setItem('addToCart', JSON.stringify(state.addToCart))
    },
    // removeProduct
    removeProduct: (state, { payload }) => {
      state.addToCart = state.addToCart.filter((cart) => cart.id !== payload);
      toast.error(`remove from your cart`, {
        position: 'top-left'
      })

      localStorage.setItem('addToCart', JSON.stringify(state.addToCart))
    },
    // decreaseCart
    decreaseCart: (state, { payload }) => {
      const itemIndexNumber = state.addToCart.findIndex(cartItem => cartItem.id === payload.id);


      if (state.addToCart[itemIndexNumber].cartQuantity > 1) {
        state.addToCart[itemIndexNumber].cartQuantity -= 1

        toast.error(`Decreased cart quantity`, {
          position: 'top-left'
        })
      }

      else if (state.addToCart[itemIndexNumber].cartQuantity === 1) {
        state.addToCart = state.addToCart.filter((cart) => cart.id !== payload.id);
        toast.error(`${payload.title} remove from cart`, {
          position: 'top-left'
        })
      }

      localStorage.setItem('addToCart', JSON.stringify(state.addToCart))

    },

    // clear cart
    clearCart:(state,action) => {
      state.addToCart = [];
      localStorage.setItem('addToCart', JSON.stringify(state.addToCart))
    },
    // add wish list product
    addToWishList:(state,{payload}) => {
      state.wishlist.push(payload);
      Swal.fire({
        icon: 'success',
        title: `${payload.title} `,
        text: 'addedd to your wishlist', 
     })
     localStorage.setItem('addToWishList', JSON.stringify(state.wishlist))
    },
    // remove wishlist product
    removeWishListProduct:(state,{payload}) => {
      state.wishlist = state.wishlist.filter(product => product.id !== payload.id);
      toast.error(`${payload.title} remove from your wishlist`, {
        position: 'top-left'
      })

    localStorage.setItem('addToWishList', JSON.stringify(state.wishlist))
    }

  },
})

// Action creators are generated for each case reducer function
export const { addToProduct, removeProduct, decreaseCart,specificItem,clearCart,addToWishList,removeWishListProduct } = productSlice.actions;

export const selectCartProduct = (state) => state.products.addToCart;
export default productSlice.reducer;