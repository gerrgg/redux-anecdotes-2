import deepFreeze from "deep-freeze";
import filterReducer from "./filterReducer";

describe("unicafe reducer", () => {
  test("filters can be set", () => {
    const state = "";

    const action = {
      type: "filter/set",
      payload: "Content",
    };

    deepFreeze(state);

    const newState = filterReducer(state, action);

    expect(newState).not.toEqual(state);
  });
});
