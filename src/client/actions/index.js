import axios from "axios";
import { USERS_FETCHED } from "./types";

export function fetchUsers() {
  return async dispatch => {
    const results = await axios.get("http://react-ssr-api.herokuapp.com/users");
    const users = results.data;
    if (results.status >= 200 && results.status < 400) {
      dispatch({
        type: USERS_FETCHED,
        users
      });
    }
  };
}
