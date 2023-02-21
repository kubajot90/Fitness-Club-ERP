import { createSlice, current } from "@reduxjs/toolkit";

export const membersSlice = createSlice({
  name: "members",
  initialState: {
    members: [],
  },
  reducers: {
    addMember() {
      console.log("add member in store");
    },
    // addToCart(state, action) {
    //   state.productsInCart = [...state.productsInCart, action.payload];
    // },
  },
});
export const membersActions = membersSlice.actions;
