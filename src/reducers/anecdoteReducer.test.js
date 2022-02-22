import deepFreeze from "deep-freeze";
import anecdoteReducer from "./anecdoteReducer";

describe("unicafe reducer", () => {
  const initialState = [
    {
      content: "If it hurts, do it more often",
      id: 1,
      votes: 0,
    },
    {
      content: "state changes are made with actions",
      id: 2,
      votes: 0,
    },
  ];

  const getID = () => initialState.length + 1;

  test("votes are incremented", () => {
    const state = initialState;

    const action = {
      type: "anecdotes/vote",
      payload: 2,
    };

    deepFreeze(state);

    const newState = anecdoteReducer(state, action);

    expect(newState).toHaveLength(2);

    expect(newState).toContainEqual(state[0]);

    expect(newState).toContainEqual({
      content: "state changes are made with actions",
      votes: 1,
      id: 2,
    });
  });

  test("new anecdotes can be added", () => {
    const state = [];
    const action = {
      type: "anecdotes/createAnecdote",
      payload: "Content",
    };

    deepFreeze(state);

    const newState = anecdoteReducer(state, action);

    expect(newState).toHaveLength(1);
    expect(newState.map((s) => s.content)).toContainEqual(action.payload);
  });
});
