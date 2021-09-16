import { ADD, DECREASE } from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD: {
      if (action.payload) {
        return {
          count: state.count + action.payload,
        };
      }
      return {
        count: state.count + 1,
      };
    }
    case DECREASE:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};
