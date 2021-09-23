import axios from "axios";
import { GET_TODOS, TODO_ERROR } from "../constaints/Constaint";
export const showToDos = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:3000/todos");
      //   console.log("Response of get request ", res);
      dispatch({
        type: GET_TODOS,
        payload: res.data,
      });
    } catch (err) {
      //   console.log("Catches error is", err);
      dispatch({
        type: TODO_ERROR,
        payload: err,
      });
    }
  };
};

// export const addToDos = (data) => {
//   console.log("Action called", data);
//   return async (dispatch) => {
//     try {
//       const response = await axios.post("http://localhost:3000/todos", data);
//       console.log(response);
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };
