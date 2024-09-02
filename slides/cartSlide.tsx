import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";
import { CartItem } from "@/lib/types";

// Define a type for the slice state
interface CartState {
  items: CartItem[];
}

// Define the initial state using that type
const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    initiate: (state) => {
      state.items = [];
    },
    add: (state, action: PayloadAction<CartItem>) => {
      if (state.items.some((item) => item.id === action.payload.id))
        return state;
      state.items = [...state.items, action.payload];
    },
    remove: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { add, remove, initiate } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
