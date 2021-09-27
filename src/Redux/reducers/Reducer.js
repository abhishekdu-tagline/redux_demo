import {
  ADD_TODOS,
  ADD_TODOS_ERROR,
  CANCEL_UPDATES,
  DELETE_TODO,
  GET_TODOS,
  GET_TODO_ERROR,
  TODO_ERROR,
  UPDATE_TODO,
} from "../constaints/Constaint";

const initialState = {
  todo: [],
  error: "",
  status: false,
};

export default function toDosReducer(state = initialState, action) {
  // console.log("Action send Data to reducer", action);
  // console.log("In API calling Error send action to reducer", action.payload);

  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todo: action.payload,
      };

    case GET_TODO_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case ADD_TODOS:
      return { ...state, todo: [...state.todo, action.payload] };

    case ADD_TODOS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_TODO:
      const filterToDos = state.todo.filter((item) => {
        return item.id !== action.payload;
      });

      console.log("filterToDos is", filterToDos);
      return { ...state, todo: filterToDos };

    // return {};   //// Learn New Concept Never return empty State Object in redux

    case UPDATE_TODO:
      const updateData = state.todo.map((item) => {
        if (item.id === action.payload) {
          return { ...item, status: true };
        } else {
          return item;
        }
      });
      // console.log("Selected ToDo is", updateData);
      return {
        ...state,
        todo: updateData,
        status: true,
      };

    case CANCEL_UPDATES:
      const updateStatus = state.todo.map((item) => {
        return { ...item, status: false };
      });

      console.log(
        "updateStatus is afther cencle button is called",
        updateStatus
      );
      return {
        ...state,
        todo: updateStatus,
      };
    default:
      return state;
  }
}
