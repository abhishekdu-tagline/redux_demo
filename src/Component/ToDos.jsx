import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDos, fetchToDos } from "../Redux/actions/Actions";
import DisplayTodos from "./DisplayTodos";

const ToDos = (props) => {
  const [toDosObj, settoDosObj] = useState({ text: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToDos());
  }, [dispatch]);

  const state = useSelector((state) => state);
  console.log("Redux State Data is", state.todo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newObj = {
      ...toDosObj,
      [name]: value,
      status: false,
      id: Math.random() * 1000000,
    };
    settoDosObj(newObj);
  };

  const callActions = () => {
    dispatch(addToDos(toDosObj));
    settoDosObj({ text: "" });
  };

  // console.log("Todos Object is", toDosObj);
  return (
    <>
      <h4> HTTP POST request</h4>

      <input
        type="text"
        name="text"
        placeholder="Enter ToDos...."
        value={toDosObj.text}
        onChange={handleChange}
      />
      <button type="button" onClick={callActions}>
        Add ToDos
      </button>

      <DisplayTodos getToDos={state} />
    </>
  );
};

export default ToDos;
