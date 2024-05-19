import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./Reducers/reducer.js"; // Assuming you will create this

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
