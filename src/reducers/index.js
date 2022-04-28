import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import verifyReducer from "./verifyReducer";
import padReducer from "./padReducer";

export default combineReducers({
  verify: verifyReducer,
  errors: errorReducer,
  pad: padReducer
});
