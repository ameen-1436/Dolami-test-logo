import { configureStore } from "@reduxjs/toolkit";
import dolamiReducer from "./categorySlice"

export const store = configureStore({
  reducer: {
    category: dolamiReducer,
  },
});
