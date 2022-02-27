import Anecdotes from "./components/Anecdotes";
import NewAnecdote from "./components/NewAnecdote";
import Notification from "./components/Notification";
import Filter from "./components/Filter";

const App = () => {
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
