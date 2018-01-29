import { USERS_FETCHED } from "../actions/types";

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case USERS_FETCHED:
      return { ...state, users: action.users };
    default:
      return state;
  }
}
