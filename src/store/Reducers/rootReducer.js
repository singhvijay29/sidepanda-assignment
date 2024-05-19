import { combineReducers } from "redux";
import dataReducer from "./reducer"; // The reducer you just created

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
