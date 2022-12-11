import {
  INCREMENT_COUNTER,
  SET_ROUTE,
  SET_OPEN,
  SET_CLOSE,
} from "../actionTypes/actionTypes";

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

const setOpen = () => {
  return {
    type: SET_OPEN,
  };
};

const setClose = () => {
  return {
    type: SET_CLOSE,
  };
};

export { incrementCounter, setRoute, setOpen, setClose };
