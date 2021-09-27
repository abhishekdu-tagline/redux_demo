import axios from "axios";
import {
  ADD_TODOS,
  ADD_TODOS_ERROR,
  CANCEL_UPDATES,
  DELETE_TODO,
  GET_TODOS,
  GET_TODO_ERROR,
  SAVE_UPDATES,
  UPDATE_TODO,
} from "../constaints/Constaint";

/// Add ToDos action Creator
export const fetchToDos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3000/todos");
      // console.log("Get Method response is", response);
      // console.log("Data is Fetch");
      dispatch({
        type: GET_TODOS,
        payload: response.data,
      });
    } catch (err) {
      console.log("Error getting the method response", err);
      dispatch({
        type: GET_TODO_ERROR,
        payload: err,
      });
    }
  };
};

/// Post Request
export const addToDos = (params) => {
  return async (dispatch) => {
    try {
      const request = await axios.post("http://localhost:3000/todos", params);
      console.log(request);
      dispatch({
        type: ADD_TODOS,
        payload: request.data,
      });
    } catch (err) {
      dispatch({
        type: ADD_TODOS_ERROR,
        payload: err.message,
      });
    }
  };
};

/// Delete Request

export const deleteTodos = (id) => {
  console.log("Delete Todos called and id is " + id);
  return async (dispatch) => {
    try {
      const deleteRes = await axios.delete(`http://localhost:3000/todos/${id}`);
      console.log(
        "<!------ Delete Response--------: " + JSON.stringify(deleteRes.data)
      );
      dispatch({
        type: DELETE_TODO,
        payload: id,
      });
    } catch (err) {
      console.log("Error in deleting Todos: " + err);
    }
  };
};

// Update the Todos
export const updateTodos = (id) => {
  return async (dispatch) => {
    dispatch({
      type: UPDATE_TODO,
      payload: id,
    });
  };
};

export const cancelUpdate = () => {
  console.log("action is cancelUpdate");
  return {
    type: CANCEL_UPDATES,
  };
};

export const saveUpdate = () => {
  return {
    type: SAVE_UPDATES,
  };
};
