import { INCREMENT_COUNTER, SET_ROUTE } from "../actionTypes/actionTypes";

const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};

const setRoute = (route) => {
  return {
    type: SET_ROUTE,
    payload: {
      route: route,
    },
  };
};

export { incrementCounter, setRoute };
