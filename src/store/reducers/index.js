import * as actions from "../action-types";

const initalState = { initial: "initial state" };

const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.SET_DATA: {
      return { ...state, data: action.payload };
    }
    default:
      return state;
  }
};

export default rootReducer;
