import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import verifyReducer from "./verifyReducer";

export default combineReducers({
  verify: verifyReducer,
  errors: errorReducer
});
