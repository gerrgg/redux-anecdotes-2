import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(vote(anecdote));
    dispatch(setNotification(`you voted for "${anecdote.content}"!`));
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  );
};

const Anecdotes = () => {
  const anecdotes = useSelector((state) => {
    const data = state.anecdotes.slice().sort((a, b) => a.votes < b.votes);

    return state.filter
      ? data.filter((anecdote) =>
          anecdote.content.toLowerCase().includes(state.filter)
        )
      : data;
  });

  return (
    <div id="Anecdotes">
      {anecdotes.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote} />
      ))}
    </div>
  );
};

export default Anecdotes;
