import deepFreeze from "deep-freeze";
import notificationReducer from "./notificationReducer";

describe("unicafe reducer", () => {
  test("notifications can be set", () => {
    const state = "";

    const action = {
      type: "notification/set",
      payload: "Content",
    };

    deepFreeze(state);

    const newState = notificationReducer(state, action);

    expect(newState).not.toEqual(state);
  });
});
