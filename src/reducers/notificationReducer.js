import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    set(state, action) {
      const content = action.payload;

      return content;
    },
  },
});

export const { set } = notificationSlice.actions;
export default notificationSlice.reducer;
