import { CURRENT_USER_FETCHED } from "../actions/types";

export default function authReducer(state = "", action) {
  switch (action.type) {
    case CURRENT_USER_FETCHED:
      return action.currentUser || false;
    default:
      return state;
  }
}
