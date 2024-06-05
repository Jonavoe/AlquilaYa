import { GET_ALL_LEAD } from "./actions.ts";

const initialState = {
  lead: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LEAD:
      return {
        ...state,
        lead: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
