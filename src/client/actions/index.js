import axios from "axios";
import { USERS_FETCHED, CURRENT_USER_FETCHED } from "./types";

export const fetchUsers = () => {
  return async (dispatch, getState, api) => {
    try {
      const results = await api.get("/users");
      const users = results.data;
      dispatch({
        type: USERS_FETCHED,
        users
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const fetchCurrentUser = () => {
  return async (dispatch, getState, api) => {
    try {
      const results = await api.get("/current_user");
      const currentUser = results.data;
      dispatch({
        type: CURRENT_USER_FETCHED,
        currentUser
      });
    } catch (e) {
      console.error(e);
    }
  };
};
