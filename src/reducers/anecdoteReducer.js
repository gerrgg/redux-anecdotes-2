import { createSlice } from "@reduxjs/toolkit";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    vote(state, action) {
      const id = action.payload;

      return state.map((state) =>
        state.id === id ? { ...state, votes: state.votes + 1 } : state
      );
    },

    createAnecdote(state, action) {
      state.push(action.payload);
    },

    appendAnecdote(state, action) {
      state.push(action.payload);
    },

    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const {
  vote,
  createAnecdote,
  appendAnecdote,
  setAnecdotes,
} = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
