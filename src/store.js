import { createStore } from "redux";
import { memReducer } from "./reducers/memReducer";

const store = createStore(memReducer);

export default store;
