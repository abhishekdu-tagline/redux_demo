import { ADD_TODOS, GET_TODOS, TODO_ERROR } from "../constaints/Constaint";

const initialState = {
  todo: [],
  loading: true,
  error: "",
};

export default function toDosReducer(state = initialState, action) {
  // console.log("action send data to reducer", action.payload);
  // console.log("action send error to reducer", action.payload);
  console.log(
    "post request is called and action send data to reducer",
    action.payload
  );
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todo: action.payload,
        loading: false,
      };

    case TODO_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case ADD_TODOS:
      return { ...state, todo: [...state.todo, action.payload] };
    default:
      return state;
  }
}
