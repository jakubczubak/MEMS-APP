import { INCREMENT_COUNTER, SET_ROUTE } from "../actionTypes/actionTypes";

const initialState = {
  counter: 0,
  route: ''
};

export const memReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };

      case SET_ROUTE:
        return {
          ...state,
          route: action.payload.route,
        };
  


    default:
      return state;
  }
};
