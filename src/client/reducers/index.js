import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import adminsReducer from "./adminsReducer";
import auth from "./authReducer";

export default combineReducers({
  usersReducer,
  auth,
  adminsReducer
});
