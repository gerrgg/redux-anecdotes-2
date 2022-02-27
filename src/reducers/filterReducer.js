import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: null,
  reducers: {
    set(state, action) {
      const content = action.payload;

      return content;
    },
  },
});

export const { set } = filterSlice.actions;
export default filterSlice.reducer;
