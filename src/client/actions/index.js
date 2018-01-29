import axios from "axios";
import { USERS_FETCHED } from "./types";

export const fetchUsers = () => {
  return async dispatch => {
    const results = await axios.get("http://react-ssr-api.herokuapp.com/users");
    const users = results.data;
    dispatch({
      type: USERS_FETCHED,
      users
    });
    // if (results.status >= 200 && results.status < 400) {
    //   console.log("USERS FETCHED SUCCESS", users);
    //   dispatch({
    //     type: USERS_FETCHED,
    //     users
    //   });
    // }
  };
};
