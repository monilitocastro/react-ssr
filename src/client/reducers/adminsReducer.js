import { ADMINS_FETCHED } from "../actions/types";

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case ADMINS_FETCHED:
      return { ...state, admins: action.admins };
    default:
      return state;
  }
}
