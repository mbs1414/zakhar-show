import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: true,
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.value = !state.value;;
    },
  },
});
export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
