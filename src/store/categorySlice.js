import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainCat: "All",
  subCat: null,
  isUserMenuVisible: false,
  langPopup: false,
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
    setUserMenu(state, action) {
      state.isUserMenuVisible = !state.isUserMenuVisible
    },
    setLangPopup(state, action) {
      state.langPopup = !state.langPopup;
    },
  },
});

export const { setMainCat, setSubCat, clearCategory, setUserMenu, setLangPopup } = dolamiSlice.actions;
export default dolamiSlice.reducer;
