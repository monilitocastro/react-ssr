import axios from "axios";
import { USERS_FETCHED, CURRENT_USER_FETCHED, ADMINS_FETCHED } from "./types";

export const fetchAdmins = () => {
  return async (dispatch, getState, api) => {
    try {
      const results = await api.get("/admins");
      const admins = results.data;
      dispatch({
        type: ADMINS_FETCHED,
        admins
      });
    } catch (e) {
      console.error(e);
    }
  };
};

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
