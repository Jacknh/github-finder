import { SET_USERS, SHOW_LOADING, HIDE_LOADING, CLEAR_USERS,SET_USER, SET_REPOS, SET_ALERT } from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload
      };

    case SHOW_LOADING:
      return {
        ...state,
        loading: true
      };

    case HIDE_LOADING:
      return {
        ...state,
        loading: false
      };

    case CLEAR_USERS:
      return {
        ...state,
        users: []
      } 

    case SET_USER: 
      return {
        ...state,
        user: action.payload
      }  

    case SET_REPOS:
      return {
        ...state,
        repos: action.payload
      }

    case SET_ALERT:
      return {
        ...state,
        alert: action.payload
      }

    default:
      return state;
  }
};
