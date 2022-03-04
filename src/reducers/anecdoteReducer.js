import anecdoteService from "../services/anecdotes";
import { createSlice } from "@reduxjs/toolkit";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    updateAnecdote(state, action) {
      return state.map((state) =>
        state.id === action.payload.id ? action.payload : state
      );
    },

    appendAnecdote(state, action) {
      state.push(action.payload);
    },

    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { updateAnecdote, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const vote = (anecdote) => {
  return async (dispatch) => {
    const newObject = { ...anecdote, votes: anecdote.votes + 1 };
    const newAnecdote = await anecdoteService.update(anecdote.id, newObject);
    dispatch(updateAnecdote(newAnecdote));
  };
};

export default anecdoteSlice.reducer;
