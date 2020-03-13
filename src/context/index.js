import React, { createContext, useReducer } from "react";
import axios from "axios";
import reducer from "./reducer";
import {
  SHOW_LOADING,
  HIDE_LOADING,
  SET_USERS,
  CLEAR_USERS,
  SET_USER,
  SET_REPOS,
  SET_ALERT
} from "./types";

export const Context = createContext();

const initialState = {
  users: [],
  user: {},
  repos: [],
  loading: false,
  alert: null
};

export default props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchUsers = async text => {
    dispatch({ type: SHOW_LOADING });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({ type: SET_USERS, payload: res.data.items });
    dispatch({ type: HIDE_LOADING });
  };

  const getUser = async username => {
    dispatch({ type: SHOW_LOADING });

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const resRepos = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({ type: SET_USER, payload: res.data });
    dispatch({ type: SET_REPOS, payload: resRepos.data });
    dispatch({ type: HIDE_LOADING });
  };

  const clearSearch = () => {
    dispatch({ type: CLEAR_USERS });
  };

  const setAlert = (msg, type) => {
    dispatch({type: SET_ALERT, payload: {msg, type}})
    setTimeout(() => {
      dispatch({ type: SET_ALERT, payload: null });
    }, 3000);
  };

  return (
    <Context.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        alert: state.alert,
        searchUsers,
        clearSearch,
        getUser,
        setAlert
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
