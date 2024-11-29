import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainCat: "All",
  subCat: null,
};

const dolamiSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setMainCat(state, action) {
      state.mainCat = action.payload;
      if (state.mainCat === "All") state.subCat = null;
    },
    setSubCat(state, action) {
      state.subCat = action.payload.item;
    },
    clearCategory(state) {
      state.mainCat = "All";
      state.subCat = null;
    },
  },
});

export const { setMainCat, setSubCat, clearCategory } = dolamiSlice.actions;
export default dolamiSlice.reducer;
