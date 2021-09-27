import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelUpdate,
  deleteTodos,
  updateTodos,
} from "../Redux/actions/Actions";
import { Demo } from "./DisplayToDos/Demo";

const DisplayTodos = (props) => {
  console.log("Props Data insid Display com", props);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };
  return (
    <>
      <h4>Display ToDos Using Get Requst</h4>

      {props.getToDos.todo.map((item) => {
        if (item.status === true) {
          return (
            <>
              <input
                type="text"
                name="text"
                defaultValue={item.text}
                onChange={handleChange}
              />
              <button>Save Update</button>
              <button
                onClick={() => {
                  dispatch(cancelUpdate());
                }}
              >
                Cancel
              </button>{" "}
              <br /> <br />
            </>
          );
        } else {
          return (
            <div key={item.id}>
              <span>{item.text}</span>

              <button
                type="button"
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  dispatch(updateTodos(item.id));
                }}
              >
                {" "}
                Update
              </button>
              <button
                type="button"
                onClick={() => {
                  dispatch(deleteTodos(item.id));
                }}
                style={{ marginLeft: "10px" }}
              >
                {" "}
                delete
              </button>
            </div>
          );
        }
      })}
    </>
  );
};

export default DisplayTodos;
