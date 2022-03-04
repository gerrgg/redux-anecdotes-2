import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    setNotification(state, action) {
      const content = action.payload;

      return content;
    },
  },
});

export const { setNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
