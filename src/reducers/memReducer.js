import {
  INCREMENT_COUNTER,
  SET_ROUTE,
  SET_OPEN,
  SET_CLOSE,
} from "../actionTypes/actionTypes";

const initialState = {
  counter: 0,
  route: "",
  open: false,
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

    case SET_OPEN:
      return {
        ...state,
        open: true,
      };

    case SET_CLOSE:
      return {
        ...state,
        open: false,
      };

    default:
      return state;
  }
};
