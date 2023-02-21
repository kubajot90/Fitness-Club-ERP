import { configureStore } from "@reduxjs/toolkit";
import { membersSlice } from "./membersSlice";
// import { favoritesSlice } from "./favoritesSlice";

const store = configureStore({
  reducer: {
    members: membersSlice.reducer,
    //   products: productsSlice.reducer,
    //   category: categorySlice.reducer,
    //   cart: cartSlice.reducer,
    //   favorites: favoritesSlice.reducer,
  },
});

export default store;
