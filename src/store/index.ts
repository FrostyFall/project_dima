import { configureStore } from "@reduxjs/toolkit";
import modalsSlice from "./slices/modals.slice";

const store = configureStore({
  reducer: {
    modals: modalsSlice.reducer,
  },
});

export default store;
