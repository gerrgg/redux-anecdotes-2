import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";

import anecdoteReducer, { setAnecdotes } from "./reducers/anecdoteReducer";
import notificationReducer from "./reducers/notificationReducer";
import filterReducer from "./reducers/filterReducer";

import anecdoteService from "./services/anecdotes";

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer,
  },
});

// get init data in index.js
anecdoteService
  .getAll()
  .then((anecdotes) => store.dispatch(setAnecdotes(anecdotes)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
