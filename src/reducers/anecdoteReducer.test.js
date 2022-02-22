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
      content: "If it hurts, do it more often",
      id: 2,
      votes: 0,
    },
  ];

  const getID = () => initialState.length + 1;

  test("votes are incremented", () => {
    const action = {
      type: "VOTE",
      data: { id: 1 },
    };

    const state = initialState;

    deepFreeze(state);

    const newState = anecdoteReducer(state, action);

    expect(newState[0].votes).toEqual(initialState[0].votes + 1);
  });

  test("new anecdotes can be added", () => {
    const action = {
      type: "NEW_ANECDOTE",
      data: {
        content: "Some content",
        id: getID(),
        votes: 0,
      },
    };

    const state = initialState;

    deepFreeze(state);

    const newState = anecdoteReducer(state, action);

    expect(newState).toEqual(state.concat(action.data));
  });
});
