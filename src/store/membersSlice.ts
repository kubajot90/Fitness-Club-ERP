import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

export interface memberState {
  members: IFormData[];
}

interface IFormData {
  name?: string;
  surname?: string;
  email?: string;
  age?: string;
  gender?: string;
}

const initialState: memberState = {
  members: [],
};

export const membersSlice = createSlice({
  name: "members",
  initialState,

  reducers: {
    addMember(state, action: PayloadAction<IFormData>) {
      const formData = action.payload;
      state.members = [...state.members, formData];

      console.log("state: ", current(state));
    },
    // addToCart(state, action) {
    //   state.productsInCart = [...state.productsInCart, action.payload];
    // },
  },
});
export const membersActions = membersSlice.actions;
