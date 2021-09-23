import axios from "axios";
import { ADD_TODOS, ADD_TODOS_ERROR } from "../constaints/Constaint";

export const addToDos = (data) => {
  console.log("Data is", data);
  axios
    .post("http://localhost:3000/todos", data)
    .then((response) => {
      console.log("Response is", response);
      return {
        type: ADD_TODOS,
        payload: response.data,
      };
    })
    .catch((error) => {
      return {
        type: ADD_TODOS_ERROR,
        payload: error.message,
      };
    });
};
