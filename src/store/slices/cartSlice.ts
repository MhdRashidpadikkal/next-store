import { Product } from "@/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  totalQuantity: number;
  subTotal: number;
}

const initialState: CartState = {
  cartItems: [],
  totalQuantity: 0,
  subTotal: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const isExistingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (isExistingItem) {
        isExistingItem.quantity += 1;
      } else {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
      }

      state.totalQuantity += 1;

      state.subTotal = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

    },
    removeCart: (state, action: PayloadAction<{ id: number }>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
       
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload.id
          );

        state.totalQuantity -= 1;
      }

    //   if (existingItem) {
    //     if (existingItem.quantity > 1) {
    //       existingItem.quantity -= 1;
    //     } else {
    //       state.cartItems = state.cartItems.filter(
    //         (item) => item.id !== action.payload.id
    //       );
    //     }

    //     state.totalQuantity -= 1;
    //   }
    },
  },
});

export const { addToCart, removeCart } = cartSlice.actions;
export const { reducer: cartReducer } = cartSlice;
