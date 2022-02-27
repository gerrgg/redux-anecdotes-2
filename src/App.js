import Anecdotes from "./components/Anecdotes";
import NewAnecdote from "./components/NewAnecdote";
import Notification from "./components/Notification";
import Filter from "./components/Filter";

import anecdoteService from "./services/anecdotes";
import { setAnecdotes } from "./reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    anecdoteService
      .getAll()
      .then((anecdotes) => dispatch(setAnecdotes(anecdotes)));
  }, [dispatch]);

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <Anecdotes />
      <NewAnecdote />
    </div>
  );
};

export default App;
