import { combineReducers } from "redux";
import AppointmentReducer from "./AppointmentReducer.js";
import SignUpReducer from "./SignUpReducer.js";
import LoginReducer from "./LoginReducer.js";
var Reducer = combineReducers({
  AppointmentReducer,
  SignUpReducer,
  LoginReducer,
});
export default Reducer;
